import {
  addReachToDOM,
} from './components/reachDOM';

import {
  setRoutes,
} from './components/reachService';

import './styles/reachjs.scss';

const init = (config = {}) => {
  addReachToDOM();

  setRoutes(config.routes);
};

export default {
  init,
};
