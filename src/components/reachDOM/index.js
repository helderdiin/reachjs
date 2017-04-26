import $ from 'jquery';
import { getKeyPressed } from '../utils';
import {
  main,
  body,
  itemFound,
} from '../templates';

let routes = [];

export const showReach = () => {
  $('#reachjs').removeClass('invisible');
  $('.reach-finder__input').focus();
};

export const hideReach = () => {
  $('#reachjs').addClass('invisible');
};

export const bindOpenEventToWindow = () => {
  const keyUpSpaceBar = (e = {}) => {
    const keyPressed = getKeyPressed(e);

    if (keyPressed === 32 || keyPressed === 0) {
      showReach();
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

export const bindCloseEventToWindow = () => {
  const keyUpEsc = (e = {}) => {
    const keyPressed = getKeyPressed(e);

    if (keyPressed === 27) {
      hideReach();
      bindOpenEventToWindow();
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
      const itemsFound = routes.filter(filterRoutes);

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

export const setRoutes = (pageRoutes = []) => {
  routes = pageRoutes;
};

export const bindReachEvents = () => {
  bindOpenEventToWindow();
  bindCloseEventToWindow();
  bindReachFinderEvents();
};

export const addReachToDOM = () => {
  $('body').append(main({
    header: '',
    body: body({}),
    footer: '',
  }));

  bindReachEvents();

  return $('body').find('#reachjs');
};

export default {
  showReach,
  hideReach,
  bindOpenEventToWindow,
  bindCloseEventToWindow,
  bindReachFinderEvents,
  setRoutes,
  bindReachEvents,
  addReachToDOM,
};
