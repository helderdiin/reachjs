import {
  expect,
} from 'chai';

import {
  stub,
} from 'sinon';

import NProgress from 'nprogress';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

import http from '../src/components/http';

describe('http file', () => {
  describe('getRoutes', () => {
    let stubNPStart;
    let stubNPDone;

    beforeEach(() => {
      stubNPStart = stub(NProgress, 'start').callsFake(() => {});
      stubNPDone = stub(NProgress, 'done').callsFake(() => {});
    });

    afterEach(() => {
      stubNPStart.restore();
      stubNPDone.restore();
    });

    mock.onGet('/invalid?q=').reply(200, 0);

    mock.onGet('/empty?q=').reply(200, []);

    mock.onGet('/empty?search=').reply(200, []);

    mock.onGet('/emptyWithRoutes?q=').reply(200, {
      "routes": []
    });

    mock.onGet('/threeRoutes?q=').reply(200, [
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

    mock.onGet('/threeRoutesWithRoutes?q=').reply(200, {
      "routes": [{
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
      }]
    });

    mock.onGet('/oneRoute?q=contato').reply(200, [
      {
        "title": "Contato",
        "path": "contato",
        "description": "Descrição da Contato"
      }
    ]);

    mock.onGet('/oneRouteWithRoutes?q=contato').reply(200, {
      "routes": [{
        "title": "Contato",
        "path": "contato",
        "description": "Descrição da Contato"
      }]
    });

    mock.onGet('/oneRoute?search=quem').reply((config) => {
      if (config.headers && config.headers.Authorization === 'UmVhY2hKUw==') {
        return [200, [
          {
            "title": "Quem Somos",
            "path": "/quem_somos",
            "description": "Descrição da Quem Somos"
          }
        ]];
      }

      return [403];
    });

    it('Should get empty routes', (done) => {
      http.getRoutes({ url: 'empty' }).then((r) => {
        expect(r).to.be.empty;

        http.getRoutes({ url: 'emptyWithRoutes' }).then((r) => {
          expect(r).to.be.empty;

          http.getRoutes({ url: 'invalid' }).then((r) => {
            expect(r).to.be.empty;
            done();
          });
        });
      });
    });

    it('Should get three routes', (done) => {
      http.getRoutes({ url: 'threeRoutes' }).then((r) => {
        expect(r.length).to.equal(3);

        http.getRoutes({ url: 'threeRoutesWithRoutes' }).then((r) => {
          expect(r.length).to.equal(3);
          done();
        });
      });
    });

    it('Should get one route filtered', (done) => {
      http.getRoutes({ url: 'oneRoute' }, 'contato').then((r) => {
        expect(r.length).to.equal(1);

        http.getRoutes({ url: 'oneRouteWithRoutes' }, 'contato').then((r) => {
          expect(r.length).to.equal(1);
          done();
        });
      });
    });

    it('Should get empty routes with diferent searchQueryParam', (done) => {
      http.getRoutes({ url: 'empty', searchQueryParam: 'search' }).then((r) => {
        expect(r).to.be.empty;
        done();
      });
    });

    it('Should get one route filtered with diferent searchQueryParam and Authorization header', (done) => {
      http.getRoutes({
        url: 'oneRoute',
        searchQueryParam: 'search',
        customHeader: {
          Authorization: 'UmVhY2hKUw=='
        }
      }, 'quem').then((r) => {
        expect(r.length).to.equal(1);
        done();
      });
    });
  });
});
