import $ from 'jquery';

import {
  selectElements,
  getElements,
} from './elements';

import {
  main,
  body,
} from '../templates';

import {
  bindReachEvents,
} from './events';

export const addReachToDOM = () => {
  $('body').append(main({
    header: '',
    body: body({}),
    footer: '',
  }));

  selectElements();
  bindReachEvents();

  return getElements('reachjs');
};

export default {
  addReachToDOM,
};
