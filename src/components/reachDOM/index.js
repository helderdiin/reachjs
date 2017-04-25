import { getKeyPressed } from '../utils';
import templates from '../templates';
import $ from 'jquery';

let routes = [];

export const addReachToDOM = () => {
  return $('body').append(templates.main({
    header: '',
    body: templates.body({}),
    footer: ''
  }));
};

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
      return r.title.toLowerCase().indexOf(valor.toLowerCase()) > -1 || r.description.toLowerCase().indexOf(valor.toLowerCase()) > -1;
    };

    const reduceItemsFound = (p, c, i) => {
      p += templates.itemFound({ 
        data: { 
          text: 'Item ' + (i+1) + ' encontrado: ' + c.title + '.'
        }
      });

      return p;
    };

    if (valor.length > 0) {
      const itemsFound = routes.filter(filterRoutes);

      $('.items-found__list').html(itemsFound.reduce(reduceItemsFound, ''));
    } else {
      $('.items-found__list').html(templates.itemFound({ 
        data: { 
          text: 'Nenhum item encontrado.'
        }
      }));
    }
  };

  $('.reach-finder__input').on('input', inputReachFinder);
};

export const setRoutes = (pageRoutes = []) => {
  routes = pageRoutes;
};

export default {
  addReachToDOM,
  showReach,
  hideReach,
  bindOpenEventToWindow,
  bindCloseEventToWindow,
  bindReachFinderEvents,
  setRoutes
};