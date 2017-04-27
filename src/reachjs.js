import {
  addReachToDOM,
} from './components/reachDOM';

import {
  setRoutes,
  setOnSelect,
} from './components/reachService';

import {
  setLocale,
} from './components/i18n';

import './styles/reachjs.scss';

const init = (config = {}) => {
  addReachToDOM();

  setRoutes(config.routes);
  setOnSelect(config.onSelect);
};

setLocale('br');

export default {
  init,
  setLocale,
};
