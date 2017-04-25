import _ from 'lodash';
import $ from 'jquery';

import './styles/reachjs.scss';

const main = _.template(' \
<div id="reachjs" class="invisible reachjs-mask"> \
  <div class="reachjs-wrapper"> \
    <div class="reachjs-container"> \
      <div class="reachjs-header"><%= header %></div> \
      <div class="reachjs-body"><%= body %></div> \
      <div class="reachjs-footer"><%= footer %></div> \
    </div> \
  </div> \
</div>');

const body = _.template(' \
<div class="reach-finder"> \
  <input class="reach-finder__input"/> \
</div> \
<div class="items-found"> \
  <ul class="items-found__list"> \
    <li> Digite algo para ser pesquisado... </li> \
  </ul> \
</div>');

const itemFound = _.template('<li class="<%= data.customClass || \"list__item\" %>"><%= data.text %></li>');

const templates = {
  main,
  body,
  itemFound
};

let routes = [];

const addReachToDOM = () => {
  return $('body').append(templates.main({
    header: '',
    body: templates.body({}),
    footer: ''
  }));
};

const showReach = () => {
  $('#reachjs').removeClass('invisible');
  $('.reach-finder__input').focus();
};

const hideReach = () => {
  $('#reachjs').addClass('invisible');
};

const getKeyPressed = (e = {}) => {
  return e.keyCode ? e.keyCode : e.which;
};

const bindOpenEventToWindow = () => {
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

const bindCloseEventToWindow = () => {
  const keyUpEsc = (e = {}) => {
    const keyPressed = getKeyPressed(e);

    if (keyPressed === 27) {
      hideReach();
      bindOpenEventToWindow();
    }
  };

  $(window).on('keyup', keyUpEsc);
};

const bindReachFinderEvents = () => {
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

const bindReachEvents = () => {
  bindOpenEventToWindow();
  bindCloseEventToWindow();
  bindReachFinderEvents();
};

const init = (config = {}) => {
  addReachToDOM();
  bindReachEvents();

  routes = config.routes;
};

export default {
  init: init
};