import {
  addReachToDOM,
} from './components/reachDOM';

import {
  setRoutes,
} from './components/reachService';

import {
  setLocale,
} from './components/i18n';

import './styles/reachjs.scss';

const init = (config = {}) => {
  addReachToDOM();

  setRoutes(config.routes);
};

setLocale('br');

export default {
  init,
  setLocale,
};
