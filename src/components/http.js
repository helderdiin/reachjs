import { ajax } from 'jquery';

const getRoutes = (url = '') => {
  return new Promise((resolve, reject) => {
    ajax(url).then((data = {}) => {
      let routes = [];

      if (Array.isArray(data)) {
        routes = data;
      } else if (data.routes && Array.isArray(data.routes)) {
        routes = data.routes;
      }

      resolve(routes);
    }, reject);
  });
};

export default {
  getRoutes,
};
