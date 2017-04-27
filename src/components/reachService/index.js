import { cloneDeep } from 'lodash';

const data = {};

export const normalizePaths = (routes = []) => {
  /* eslint-disable no-param-reassign */
  return routes.map((r) => {
    r.path = r.path || '';
    r.path = r.path.charAt(0) !== '/' ? `/${r.path}` : r.path;
    return r;
  });
};

export const setRoutes = (routes = []) => {
  data.routes = normalizePaths(routes);
};

export const getRoutes = () => {
  return cloneDeep(data.routes);
};

export const getRoute = (route = '') => {
  return data.routes.find((r) => {
    return r.path === route;
  });
};

export const setOnSelect = (onSelect) => {
  data.onSelect = onSelect;
};

export const getOnSelect = () => {
  return data.onSelect;
};

export const itemSelected = (route = '') => {
  if (route) {
    const routeData = getRoute(route);

    if (data.onSelect && typeof data.onSelect === 'function') {
      data.onSelect(routeData);
    } else {
      window.location = routeData.path;
    }
  }
};

export default {
  setRoutes,
  getRoutes,
  normalizePaths,
  getRoute,
  itemSelected,
  getOnSelect,
  setOnSelect,
};
