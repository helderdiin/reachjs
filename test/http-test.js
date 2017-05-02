import {
  expect,
} from 'chai';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

import http from '../src/components/http';

describe('http file', () => {
  describe('getRoutes', () => {
    mock.onGet('/invalid').reply(200, 0);

    mock.onGet('/empty').reply(200, []);

    mock.onGet('/emptyWithRoutes').reply(200, {
      "routes": []
    });

    mock.onGet('/threeRoutes').reply(200, [
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

    mock.onGet('/threeRoutesWithRoutes').reply(200, {
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

    it('Should get empty routes', (done) => {
      http.getRoutes('empty').then((r) => {
        expect(r).to.be.empty;

        http.getRoutes('emptyWithRoutes').then((r) => {
          expect(r).to.be.empty;

          http.getRoutes('invalid').then((r) => {
            expect(r).to.be.empty;
            done();
          });
        });
      });
    });

    it('Should get three routes', (done) => {
      http.getRoutes('threeRoutes').then((r) => {
        expect(r.length).to.equal(3);

        http.getRoutes('threeRoutesWithRoutes').then((r) => {
          expect(r.length).to.equal(3);
          done();
        });
      });
    });
  });
});
