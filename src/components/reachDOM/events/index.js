import $ from 'jquery';
import { getKeyPressed } from '../../utils';
import { getText } from '../../i18n';

import {
  getTemplates,
} from '../../templates';

import {
  getRoutes,
  itemSelected,
} from '../../reachService';

import {
  showReach,
  hideReach,
} from '../visibility';

import {
  getSelectors,
  getElements,
} from '../elements';

const resetReach = () => {
  getElements('finderInput').val('').trigger('input');
};

export const bindOpenEventToWindow = () => {
  const keyUpSpaceBar = (e = {}) => {
    const keyPressed = getKeyPressed(e);

    if (keyPressed === 32 || keyPressed === 0) {
      showReach();
      getElements('finderInput').focus();
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

export const bindCloseEventToMask = () => {
  getElements('reachjs').on('click', (e = {}) => {
    const classes = $(e.target).attr('class') || '';

    if (classes.indexOf('reachjs-wrapper') > -1 || classes.indexOf('reachjs-mask') > -1) {
      closeReach();
    }
  });
};

const itemNotFound = () => {
  return getTemplates('itemFound')({
    data: {
      text: getText('no-items-found'),
    },
  });
};

export const bindReachFinderEvents = () => {
  const inputReachFinder = (e = {}) => {
    const valor = e.target.value.trim();

    const filterRoutes = (r) => {
      return `${r.title} ${r.description}`.toLowerCase().indexOf(valor.toLowerCase()) > -1;
    };

    const reduceItemsFound = (p, c) => {
      return p + getTemplates('itemFound')({
        data: {
          text: c.title,
          customClass: 'list__item',
          path: c.path,
        },
      });
    };

    if (valor.length > 0) {
      const itemsFound = getRoutes().filter(filterRoutes);

      getElements('foundList').html(itemsFound.reduce(reduceItemsFound, '') || itemNotFound());
    } else {
      getElements('foundList').html(getTemplates('itemFound')({
        data: {
          text: getText('enter-any-text'),
        },
      }));
    }
  };

  getElements('finderInput').on('input', inputReachFinder);
};

export const bindClickEventToItem = () => {
  const clickListItem = (e = {}) => {
    itemSelected(e.target.dataset.path);
    closeReach();
  };

  getElements('reachjs').on('click', getSelectors('listItem'), clickListItem);
};

export const bindClickEventToCloseButton = () => {
  getElements('reachjsClose').on('click', closeReach);
};

export const bindCloseEvents = () => {
  bindCloseEventToWindow();
  bindClickEventToCloseButton();
  bindCloseEventToMask();
};

export const bindReachEvents = () => {
  bindOpenEventToWindow();
  bindReachFinderEvents();
  bindClickEventToItem();
  bindCloseEvents();
};

export default {
  bindOpenEventToWindow,
  bindCloseEventToWindow,
  bindReachFinderEvents,
  bindReachEvents,
  bindClickEventToItem,
};
