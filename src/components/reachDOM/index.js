import $ from 'jquery';

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

  bindReachEvents();

  return $('body').find('#reachjs');
};

export default {
  addReachToDOM,
};
