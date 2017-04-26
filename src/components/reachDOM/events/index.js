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

export const bindReachFinderEvents = () => {
  const inputReachFinder = (e = {}) => {
    const valor = e.target.value.trim();

    const filterRoutes = (r) => {
      return r.title.toLowerCase().indexOf(valor.toLowerCase()) > -1
        || r.description.toLowerCase().indexOf(valor.toLowerCase()) > -1;
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

      $('.items-found__list').html(itemsFound.reduce(reduceItemsFound, ''));
    } else {
      $('.items-found__list').html(itemFound({
        data: {
          text: 'Nenhum item encontrado.',
        },
      }));
    }
  };

  $('.reach-finder__input').on('input', inputReachFinder);
};

export const bindClickEventToItem = () => {
  const clickItemList = () => {
    closeReach();
  };

  $('#reachjs').on('click', '.items-found__list .list__item', clickItemList);
};

export const bindReachEvents = () => {
  bindOpenEventToWindow();
  bindCloseEventToWindow();
  bindReachFinderEvents();
  bindClickEventToItem();
};

export default {
  bindOpenEventToWindow,
  bindCloseEventToWindow,
  bindReachFinderEvents,
  bindReachEvents,
  bindClickEventToItem,
};
