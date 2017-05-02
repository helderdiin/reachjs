import {
  expect,
} from 'chai';

import {
  setRoutes,
  getRoutes,
  normalizePaths,
  getRoute,
  setOnSelect,
  getOnSelect,
  itemSelected,
} from '../src/components/reachService';

describe('reachService file', () => {
  let routes;

  global.window = {
    location: '',
  };

  beforeEach(() => {
    routes = [{
      title: 'blandit at velit',
      path: '/blandit/at/velit',
      description: 'facilisis sed est sit amet',
    }, {
      title: 'Nunc quam nulla',
      description: 'luctus blandit dolor',
    }, {
      title: 'Suspendisse commodo',
      path: 'suspendisse/commodo',
      description: 'mauris purus, tempus sagittis massa faucibus sit amet',
    }];
  });
  describe('setRoutes', () => {
    it('Should set none routes', (done) => {
      setRoutes();

      getRoutes().then((r) => {
        expect(r).to.be.empty;
        done();
      });
    });

    it('Should set the new routes', (done) => {
      setRoutes(routes);

      getRoutes().then((r) => {
        expect(r).to.have.length.above(0);
        done();
      });
    });
  });

  describe('normalizePaths', () => {
    it('Should return empty', () => {
      expect(normalizePaths()).to.be.empty;
    });
  });

  describe('getRoute', () => {
    it('Should return undefined', (done) => {
      getRoute().then((r) => {
        expect(r).to.be.undefined;
        done();
      });
    });

    it('Should return route data', (done) => {
      getRoute('/blandit/at/velit').then((r) => {
        expect(Object.keys(r)).to.have.length.above(0);
        done();
      });
    });
  });

  describe('onSelect', () => {
    it('Should return undefined', () => {
      expect(getOnSelect()).to.be.undefined;
    });

    it('Should set onSelect to undefined', () => {
      setOnSelect();
      expect(getOnSelect()).to.be.undefined;
    });

    it('Should set onSelect with method', () => {
      setOnSelect(() => {});
      expect(getOnSelect()).to.be.a('function');
    });
  });

  describe('itemSelected', () => {
    it('Should return undefined', (done) => {
      itemSelected().then((r) => {
        expect(r).to.be.undefined;
        done();
      });
    });

    it('Should change window.location to path', (done) => {
      setOnSelect();
      itemSelected('/suspendisse/commodo').then(() => {
        expect(window.location).to.equal('/suspendisse/commodo');
        done();
      });
    });

    it('Should execute onSelect method', (done) => {
      let temp = false;
      setOnSelect(() => { temp = true; });
      itemSelected('/suspendisse/commodo').then(() => {
        expect(temp).to.be.true;
        done();
      });
    });

    it('Should set onSelect with method', () => {
      setOnSelect(() => {});
      expect(getOnSelect()).to.be.a('function');
    });
  });
});
