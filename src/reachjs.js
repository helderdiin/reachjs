import {
  bindOpenEventToWindow,
  bindCloseEventToWindow,
  bindReachFinderEvents,
  addReachToDOM,
  setRoutes,
} from './components/reachDOM';

import './styles/reachjs.scss';

const bindReachEvents = () => {
  bindOpenEventToWindow();
  bindCloseEventToWindow();
  bindReachFinderEvents();
};

const init = (config = {}) => {
  addReachToDOM();
  bindReachEvents();

  setRoutes(config.routes);
};

export default {
  init,
};
