import reachDOM from './components/reachDOM';

import './styles/reachjs.scss';

const bindReachEvents = () => {
  reachDOM.bindOpenEventToWindow();
  reachDOM.bindCloseEventToWindow();
  reachDOM.bindReachFinderEvents();
};

const init = (config = {}) => {
  reachDOM.addReachToDOM();
  bindReachEvents();

  reachDOM.setRoutes(config.routes);
};

export default {
  init: init
};