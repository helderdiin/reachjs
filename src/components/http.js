import axios from 'axios';
import NProgress from 'nprogress';

const getRoutes = (url, route = '') => {
  NProgress.start();

  return new Promise((resolve, reject) => {
    axios(`${url}?q=${route}`).then((response) => {
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
