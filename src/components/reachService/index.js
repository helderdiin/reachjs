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
  return Promise.resolve(cloneDeep(data.routes));
};

export const getRoute = (route = '') => {
  return Promise.resolve(data.routes.find((r) => {
    return r.path === route;
  }));
};

export const setOnSelect = (onSelect) => {
  data.onSelect = onSelect;
};

export const getOnSelect = () => {
  return data.onSelect;
};

export const itemSelected = (route = '') => {
  if (route) {
    getRoute(route).then((routeData = {}) => {
      if (data.onSelect && typeof data.onSelect === 'function') {
        data.onSelect(routeData);
      } else {
        window.location = routeData.path;
      }
    });
  }
};

export const setOpenKeys = (openKeys = [17, 32]) => {
  if (openKeys.length === 2) {
    data.openKeys = openKeys;
  }
};

export const getOpenKeys = () => {
  return cloneDeep(data.openKeys);
};

export const getFirstOpenKey = () => {
  return getOpenKeys()[0];
};

export const getSecondOpenKey = () => {
  return getOpenKeys()[1];
};

export const setRoutesUrl = (routesUrl = '') => {
  data.routesUrl = routesUrl;
};

export default {
  setRoutes,
  getRoutes,
  normalizePaths,
  getRoute,
  itemSelected,
  getOnSelect,
  setOnSelect,
  getOpenKeys,
  setOpenKeys,
  getFirstOpenKey,
  getSecondOpenKey,
  setRoutesUrl,
};
