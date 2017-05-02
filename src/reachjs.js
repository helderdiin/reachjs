import {
  addReachToDOM,
} from './components/reachDOM';

import {
  setRoutes,
  setOnSelect,
  setOpenKeys,
} from './components/reachService';

import {
  setLocale,
} from './components/i18n';

import './styles/reachjs.scss';

const init = (config = {}) => {
  if (config.locale) {
    setLocale(config.locale);
  }

  if (config.openKeys) {
    setOpenKeys(config.openKeys);
  }

  addReachToDOM();

  setRoutes(config.routes);
  setOnSelect(config.onSelect);
};

setLocale('br');
setOpenKeys();

export default {
  init,
  setLocale,
  setOpenKeys,
};
