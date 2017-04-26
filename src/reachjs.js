import {
  addReachToDOM,
  setRoutes,
} from './components/reachDOM';

import './styles/reachjs.scss';

const init = (config = {}) => {
  addReachToDOM();

  setRoutes(config.routes);
};

export default {
  init,
};
