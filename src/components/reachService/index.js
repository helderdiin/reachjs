import { cloneDeep } from 'lodash';

import http from '../http';

import { removeWordAccentuation } from '../utils';

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

export const getRoutes = (q) => {
  if (data.routesUrl) {
    return new Promise((resolve, reject) => {
      http.getRoutes(data.routesConfig, q).then((routes) => {
        setRoutes(routes);
        resolve(routes);
      }, reject);
    });
  }

  if (q) {
    const mainRoutes = data.routes.filter((r) => {
      return removeWordAccentuation(`${r.title} ${r.description}`.toLowerCase()).indexOf(removeWordAccentuation(q.toLowerCase())) > -1;
    });

    const otherRoutes = removeWordAccentuation(q.toLowerCase()).split(' ').reduce((p, c) => {
      const routes = data.routes.filter((r) => {
        return removeWordAccentuation(`${r.title} ${r.description}`.toLowerCase()).indexOf(c) > -1 && [...p, ...mainRoutes].find(m => m.path === r.path) === undefined;
      });

      return [...p, ...routes];
    }, []);

    return Promise.resolve([...mainRoutes, ...otherRoutes]);
  }

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
  return getRoute(route).then((routeData = {}) => {
    if (data.onSelect && typeof data.onSelect === 'function') {
      data.onSelect(routeData);
    } else {
      window.location = routeData.path;
    }
  });
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

export const setRoutesUrl = (routesUrl) => {
  data.routesConfig = data.routesConfig || {};

  data.routesUrl = routesUrl;
  data.routesConfig.url = routesUrl;
};

export const getRoutesUrl = () => {
  return data.routesUrl;
};

export const setRoutesConfig = (config) => {
  data.routesConfig = data.routesConfig || {};

  data.routesConfig = Object.assign({}, data.routesConfig, config);
};

export const getRoutesConfig = () => {
  return cloneDeep(data.routesConfig);
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
  getRoutesUrl,
  setRoutesConfig,
  getRoutesConfig,
};
