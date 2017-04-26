import _ from 'lodash';

const data = {};

export const setRoutes = (routes = []) => {
  data.routes = routes;
};

export const getRoutes = () => {
  return _.cloneDeep(data.routes);
};

export default {
  setRoutes,
  getRoutes,
};
