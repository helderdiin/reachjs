import axios from 'axios';
import NProgress from 'nprogress';

const getRoutes = (config, route = '') => {
  NProgress.start();

  const { url } = config;
  const searchQueryParam = config.searchQueryParam || 'q';

  return new Promise((resolve, reject) => {
    axios(`${url}?${searchQueryParam}=${route}`).then((response) => {
      const data = response.data;
      let routes = [];

      if (Array.isArray(data)) {
        routes = data;
      } else if (data.routes && Array.isArray(data.routes)) {
        routes = data.routes;
      }

      NProgress.done();

      resolve(routes);
    }, reject);
  });
};

export default {
  getRoutes,
};
