import { cloneDeep } from 'lodash';

const data = {};

export const setRoutes = (routes = []) => {
  data.routes = routes;
};

export const getRoutes = () => {
  return cloneDeep(data.routes);
};

export default {
  setRoutes,
  getRoutes,
};
