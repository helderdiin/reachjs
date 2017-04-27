import {
  expect,
} from 'chai';

import {
  setRoutes,
  getRoutes,
} from '../src/components/reachService';

describe('reachService file', () => {
  describe('setRoutes', () => {
    it('Should set none routes', () => {
      expect(getRoutes()).to.be.undefined;
      setRoutes();
      expect(getRoutes()).to.be.empty;
    });

    it('Should set the new routes', () => {
      const routes = [{
        title: 'blandit at velit',
        description: 'facilisis sed est sit amet',
      }, {
        title: 'Nunc quam nulla',
        description: 'luctus blandit dolor',
      }, {
        title: 'Suspendisse commodo',
        description: 'mauris purus, tempus sagittis massa faucibus sit amet',
      }];

      expect(getRoutes()).to.be.empty;
      setRoutes(routes);
      expect(getRoutes()).to.have.length.above(0);
    });
  });
});
