import $ from 'jquery';
import { debounce } from 'lodash';
import { getKeyPressed } from '../../utils';
import { getText } from '../../i18n';

import {
  getTemplates,
} from '../../templates';

import {
  getRoutes,
  itemSelected,
  getFirstOpenKey,
  getSecondOpenKey,
} from '../../reachService';

import {
  showReach,
  hideReach,
} from '../visibility';

import {
  getSelectors,
  getElements,
  getClasses,
} from '../elements';

const resetReach = () => {
  getElements('finderInput').val('').trigger('input');
};

export const bindOpenEventToWindow = () => {
  const keyUpSecondKey = (e = {}) => {
    if (getKeyPressed(e) === getSecondOpenKey()) {
      showReach();
      getElements('finderInput').focus();
    }
  };

  const keyUpFirstKey = (e = {}) => {
    if (getKeyPressed(e) === getFirstOpenKey()) {
      $(window).off('keyup', keyUpSecondKey);
    }

    bindOpenEventToWindow();
  };

  const keyDownFirstKey = (e = {}) => {
    if (getKeyPressed(e) === getFirstOpenKey()) {
      $(window).one('keyup', keyUpSecondKey);
      $(window).one('keyup', keyUpFirstKey);
    } else {
      bindOpenEventToWindow();
    }
  };

  $(window).one('keydown', keyDownFirstKey);
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
  const inputReachFinder = debounce((e = {}) => {
    const valor = e.target.value.trim();

    const reduceItemsFound = (p, c, i) => {
      return p + getTemplates('itemFound')({
        data: {
          text: c.title,
          customClass: 'list__item',
          path: c.path,
          index: i + 1,
        },
      });
    };

    if (valor.length > 0) {
      getRoutes(valor).then((routes = []) => {
        getElements('foundList').html(routes.reduce(reduceItemsFound, '') || itemNotFound());
        getElements('firstItemList', true).addClass(getClasses('listItemActive'));
      });
    } else {
      getElements('foundList').html(getTemplates('itemFound')({
        data: {
          text: getText('enter-any-text'),
        },
      }));
    }
  }, 300);

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

export const bindActiveEventToItemList = () => {
  const mouseEnterListItem = (e = {}) => {
    getElements('listItem', true).removeClass(getClasses('listItemActive'));
    $(e.target).addClass(getClasses('listItemActive'));
  };

  const mouseLeaveListItem = (e = {}) => {
    $(e.target).removeClass(getClasses('listItemActive'));
  };

  getElements('reachjs').on('mouseenter', getSelectors('listItem'), mouseEnterListItem);
  getElements('reachjs').on('mouseleave', getSelectors('listItem'), mouseLeaveListItem);
};

export const bindArrowKeyMouveToList = () => {
  getElements('body').on('keydown', (e = {}) => {
    if (getElements('reachjs').is(':visible')) {
      const keyPressed = getKeyPressed(e);

      if (keyPressed === 38 || keyPressed === 40 || keyPressed === 9) {
        e.preventDefault();

        const listItemActive = getElements('listItemActive', true);

        if (listItemActive.length > 0) {
          if (keyPressed === 38) {
            const prevElement = listItemActive.prev();

            if (prevElement.length > 0) {
              listItemActive.removeClass(getClasses('listItemActive'));
              prevElement.addClass(getClasses('listItemActive'));
            }
          } else if (keyPressed === 40 || keyPressed === 9) {
            const nextElement = listItemActive.next();

            if (nextElement.length > 0) {
              listItemActive.removeClass(getClasses('listItemActive'));
              nextElement.addClass(getClasses('listItemActive'));
            }
          }
        } else {
          getElements('firstItemList', true).addClass(getClasses('listItemActive'));
        }
      }
    }
  });
};

export const bindSelectItemWithEnter = () => {
  getElements('body').on('keydown', (e = {}) => {
    if (getElements('reachjs').is(':visible') && getKeyPressed(e) === 13) {
      e.preventDefault();

      const listItemActive = getElements('listItemActive', true);

      if (listItemActive.length > 0) {
        itemSelected(listItemActive[0].dataset.path);
        closeReach();
      }
    }
  });
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
  bindActiveEventToItemList();
  bindArrowKeyMouveToList();
  bindSelectItemWithEnter();
};

export default {
  bindOpenEventToWindow,
  bindCloseEventToWindow,
  bindReachFinderEvents,
  bindReachEvents,
  bindClickEventToItem,
  bindActiveEventToItemList,
  bindArrowKeyMouveToList,
  bindSelectItemWithEnter,
};
