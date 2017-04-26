import { template } from 'lodash';
import { getText } from './i18n';

let templates = {};

export const generateTemplates = () => {
  const main = template('' +
  '<div id="reachjs" class="invisible reachjs-mask">' +
    '<div class="reachjs-wrapper">' +
      '<div class="reachjs-container">' +
        `<span title="${getText('close-button')}" class="reachjs-fechar">x</span>` +
        '<div class="reachjs-header"><%= header %></div>' +
        '<div class="reachjs-body"><%= body %></div>' +
        '<div class="reachjs-footer"><%= footer %></div>' +
      '</div>' +
    '</div>' +
  '</div>');

  const body = template('' +
  '<div class="reach-finder">' +
    '<input class="reach-finder__input"/>' +
  '</div>' +
  '<div class="items-found style-scroll">' +
    '<ul class="items-found__list">' +
      '<li> Digite algo para ser pesquisado... </li>' +
    '</ul>' +
  '</div>');

  const itemFound = template('<li class="<%= data.customClass || "" %>"><%= data.text %></li>');

  templates = {
    main,
    body,
    itemFound,
  };

  return templates;
};

export const getTemplates = (item = '') => {
  return item && templates[item] ? templates[item] : '';
};

export default {
  getTemplates,
};
