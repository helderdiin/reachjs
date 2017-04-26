import $ from 'jquery';

import {
  selectElements,
  getElements,
} from './elements';

import {
  generateTemplates,
  getTemplates,
} from '../templates';

import {
  bindReachEvents,
} from './events';

export const addReachToDOM = () => {
  generateTemplates();

  $('body').append(getTemplates('main')({
    header: '',
    body: getTemplates('body')({}),
    footer: '',
  }));

  selectElements();
  bindReachEvents();

  return getElements('reachjs');
};

export default {
  addReachToDOM,
};
