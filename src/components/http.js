import axios from 'axios';

const getRoutes = (url) => {
  return new Promise((resolve, reject) => {
    axios(url).then((response) => {
      const data = response.data;
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
