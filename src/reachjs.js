import _ from 'lodash';
import $ from 'jquery';

import './styles/reachjs.scss';

var main = _.template(' \
<div id="reachjs" class="invisible reachjs-mask"> \
  <div class="reachjs-wrapper"> \
    <div class="reachjs-container"> \
      <div class="reachjs-header"><%= header %></div> \
      <div class="reachjs-body"><%= body %></div> \
      <div class="reachjs-footer"><%= footer %></div> \
    </div> \
  </div> \
</div>');

var body = _.template(' \
<div class="reach-finder"> \
  <input class="reach-finder__input"/> \
</div> \
<div class="items-found"> \
  <ul class="items-found__list"> \
    <li> Digite algo para ser pesquisado... </li> \
  </ul> \
</div>');

var itemFound = _.template('\
  <li class="<%= data.customClass || \"list__item\" %>"><%= data.text %></li> \
');

var templates = {
  main: main,
  body: body,
  itemFound: itemFound
};

var routes = [];

function addReachToDOM() {
  return $('body').append(templates.main({
    header: '',
    body: templates.body({}),
    footer: ''
  }));
}

function showReach() {
  $('#reachjs').removeClass('invisible');
  $('.reach-finder__input').focus();
}

function hideReach() {
  $('#reachjs').addClass('invisible');
}

function getKeyPressed(e) {
  return e.keyCode ? e.keyCode : e.which;
}

function bindOpenEventToWindow() {
  var keyUpSpaceBar = function keyUpSpaceBar(e) {
    var keyPressed = getKeyPressed(e);

    if (keyPressed === 32 || keyPressed === 0) {
      showReach();
    }
  };

  var keyUpCtrl = function keyUpCtrl(e) {
    if (e.ctrlKey) {
      $(window).off('keyup', keyUpSpaceBar);
    }

    bindOpenEventToWindow();
  };

  var keyDownCtrl = function keyDownCtrl(e) {
    if (e.ctrlKey) {
      $(window).one('keyup', keyUpSpaceBar);
      $(window).one('keyup', keyUpCtrl);
    } else {
      bindOpenEventToWindow();
    }
  };

  $(window).one('keydown', keyDownCtrl);
}

function bindCloseEventToWindow() {
  $(window).on('keyup', function(e) {
    var keyPressed = getKeyPressed(e);

    if (keyPressed === 27) {
      hideReach();
      bindOpenEventToWindow();
    }
  });
}

function bindReachFinderEvents() {
  $('.reach-finder__input').on('input', function(e) {
    var valor = e.target.value.trim();

    if (valor.length > 0) {
      var itemsFound = routes.filter(function(r) {
        return r.title.toLowerCase().indexOf(valor.toLowerCase()) > -1 || r.description.toLowerCase().indexOf(valor.toLowerCase()) > -1;
      });

      $('.items-found__list').html(itemsFound.reduce(function(p, c, i) {
        p += templates.itemFound({ data: { text: 'Item ' + (i+1) + ' encontrado: ' + c.title + '.' } });
        return p;
      }, ''));
    } else {
      $('.items-found__list').html(templates.itemFound({ data: { text: 'Nenhum item encontrado.' } }));
    }
  });
}

function bindReachEvents() {
  bindOpenEventToWindow();
  bindCloseEventToWindow();
  bindReachFinderEvents();
}

function init(config) {
  addReachToDOM();
  bindReachEvents();

  routes = config.routes;
}

module.exports = {
  init: init
};