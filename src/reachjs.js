import {
  addReachToDOM,
} from './components/reachDOM';

import {
  setRoutes,
  setOnSelect,
  setOpenKeys,
  setRoutesUrl,
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

  if (config.routesUrl) {
    setRoutesUrl(config.routesUrl);
  } else if (config.routes) {
    setRoutes(config.routes);
  }

  if (config.onSelect) {
    setOnSelect(config.onSelect);
  }
};

setLocale('br');
setOpenKeys();

export default {
  init,
  setLocale,
  setOpenKeys,
  setOnSelect,
  setRoutesUrl,
  setRoutes,
};
