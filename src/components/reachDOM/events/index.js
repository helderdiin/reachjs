import $ from 'jquery';
import { getKeyPressed } from '../../utils';

import {
  itemFound,
} from '../../templates';

import {
  getRoutes,
} from '../../reachService';

import {
  showReach,
  hideReach,
} from '../visibility';

const resetReach = () => {
  $('.reach-finder__input').val('').trigger('input');
};

export const bindOpenEventToWindow = () => {
  const keyUpSpaceBar = (e = {}) => {
    const keyPressed = getKeyPressed(e);

    if (keyPressed === 32 || keyPressed === 0) {
      showReach();
      $('.reach-finder__input').focus();
    }
  };

  const keyUpCtrl = (e = {}) => {
    if (e.ctrlKey) {
      $(window).off('keyup', keyUpSpaceBar);
    }

    bindOpenEventToWindow();
  };

  const keyDownCtrl = (e = {}) => {
    if (e.ctrlKey) {
      $(window).one('keyup', keyUpSpaceBar);
      $(window).one('keyup', keyUpCtrl);
    } else {
      bindOpenEventToWindow();
    }
  };

  $(window).one('keydown', keyDownCtrl);
};

const closeReach = () => {
  hideReach();
  bindOpenEventToWindow();
  resetReach();
};

export const bindCloseEventToWindow = () => {
  const keyUpEsc = (e = {}) => {
    const keyPressed = getKeyPressed(e);

    if (keyPressed === 27) {
      closeReach();
    }
  };

  $(window).on('keyup', keyUpEsc);
};

const itemNotFound = () => {
  return itemFound({
    data: {
      text: 'Nenhum item encontrado.',
    },
  });
};

export const bindReachFinderEvents = () => {
  const inputReachFinder = (e = {}) => {
    const valor = e.target.value.trim();

    const filterRoutes = (r) => {
      return (`${r.title} ${r.description}`).toLowerCase().indexOf(valor.toLowerCase()) > -1;
    };

    const reduceItemsFound = (p, c) => {
      return p + itemFound({
        data: {
          text: `${c.title}`,
          customClass: 'list__item',
        },
      });
    };

    if (valor.length > 0) {
      const itemsFound = getRoutes().filter(filterRoutes);

      $('.items-found__list').html(itemsFound.reduce(reduceItemsFound, '') || itemNotFound());
    } else {
      $('.items-found__list').html(itemFound({
        data: {
          text: 'Digite algo para ser pesquisado...',
        },
      }));
    }
  };

  $('.reach-finder__input').on('input', inputReachFinder);
};

export const bindClickEventToItem = () => {
  $('#reachjs').on('click', '.items-found__list .list__item', closeReach);
};

export const bindClickEventToCloseButton = () => {
  $('.reachjs-fechar').on('click', closeReach);
};

export const bindReachEvents = () => {
  bindOpenEventToWindow();
  bindCloseEventToWindow();
  bindReachFinderEvents();
  bindClickEventToItem();
  bindClickEventToCloseButton();
};

export default {
  bindOpenEventToWindow,
  bindCloseEventToWindow,
  bindReachFinderEvents,
  bindReachEvents,
  bindClickEventToItem,
};
