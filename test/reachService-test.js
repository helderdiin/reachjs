import {
  expect,
} from 'chai';

import {
  stub,
} from 'sinon';


import {
  setRoutes,
  getRoutes,
  normalizePaths,
  getRoute,
  setOnSelect,
  getOnSelect,
  itemSelected,
  setRoutesUrl,
  getRoutesUrl,
  setOpenKeys,
  getOpenKeys,
  getFirstOpenKey,
  getSecondOpenKey,
  setRoutesConfig,
  getRoutesConfig,
} from '../src/components/reachService';

import http from '../src/components/http';

describe('reachService file', () => {
  global.window = {
    location: '',
  };

  let routes;

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

  describe('getRoutes', () => {
    let stubHttpGetRoutes;

    beforeEach(() => {
      stubHttpGetRoutes = stub(http, 'getRoutes').callsFake(() => {
        return Promise.resolve([
          {
            "title": "Home",
            "path": "home",
            "description": "Descrição da Home"
          }, {
            "title": "Quem Somos",
            "path": "/quem_somos",
            "description": "Descrição da Quem Somos"
          }, {
            "title": "Contato",
            "path": "contato",
            "description": "Descrição da Contato"
          }
        ]);
      });
    });

    afterEach(() => {
      stubHttpGetRoutes.restore();
    });

    it('Should get routes from url', (done) => {
      setRoutesUrl('teste');

      getRoutes().then((r) => {
        expect(r.length).to.equal(3);
        done();
      });
    });

    it('Should get filtered routes', (done) => {
      setRoutesUrl();
      setRoutes(routes);

      getRoutes('amet').then((r) => {
        expect(r.length).to.equal(2);
        done();
      });
    });
  });

  describe('setRoutesUrl', () => {
    it('Should set the url to get routes', () => {
      setRoutesUrl('teste');
      expect(getRoutesUrl()).to.equal('teste');
    });

    afterEach(() => {
      setRoutesUrl();
    });
  });

  describe('setOpenKeys', () => {
    it('Should set the default open keys', () => {
      setOpenKeys();
      expect(getOpenKeys()[0]).to.equal(17);
      expect(getOpenKeys()[1]).to.equal(32);
    });

    it('Should set the new open keys', () => {
      setOpenKeys([17, 18]);
      expect(getOpenKeys()[0]).to.equal(17);
      expect(getOpenKeys()[1]).to.equal(18);
    });

    it('Should not change the open keys', () => {
      setOpenKeys([32]);
      expect(getFirstOpenKey()).to.equal(17);
      expect(getSecondOpenKey()).to.equal(18);
    });
  });

  describe('normalizePaths', () => {
    it('Should return empty', () => {
      expect(normalizePaths()).to.be.empty;
    });
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

  describe('setRoutesConfig', () => {
    it('Should set routes url', () => {
      setRoutesConfig({
        url: 'url'
      });
      expect(getRoutesConfig().url).to.equal('url');
    });

    it('Should set routes searchQueryParam', () => {
      setRoutesConfig({
        searchQueryParam: 'search'
      });
      expect(getRoutesConfig().searchQueryParam).to.equal('search');
    });
  });
});
