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
    it('Should set none routes', () => {
      expect(getRoutes()).to.be.undefined;
      setRoutes();
      expect(getRoutes()).to.be.empty;
    });

    it('Should set the new routes', () => {
      expect(getRoutes()).to.be.empty;
      setRoutes(routes);
      expect(getRoutes()).to.have.length.above(0);
    });
  });

  describe('normalizePaths', () => {
    it('Should return empty', () => {
      expect(normalizePaths()).to.be.empty;
    });
  });

  describe('getRoute', () => {
    it('Should return undefined', () => {
      expect(getRoute()).to.be.undefined;
    });

    it('Should return route data', () => {
      expect(Object.keys(getRoute('/blandit/at/velit'))).to.have.length.above(0);
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
    it('Should return undefined', () => {
      expect(itemSelected()).to.be.undefined;
    });

    it('Should change window.location to path', () => {
      setOnSelect();
      itemSelected('/suspendisse/commodo');
      expect(window.location).to.equal('/suspendisse/commodo');
    });

    it('Should execute onSelect method', () => {
      let temp = false;
      setOnSelect(() => { temp = true; });
      itemSelected('/suspendisse/commodo');
      expect(temp).to.be.true;
    });

    it('Should set onSelect with method', () => {
      setOnSelect(() => {});
      expect(getOnSelect()).to.be.a('function');
    });
  });
});
