import {
  expect,
} from 'chai';

import {
  generateTemplates,
  getTemplates,
} from '../src/components/templates';

describe('Templates file', () => {
  describe('generateTemplates', () => {
    it('Should return an object', () => {
      expect(generateTemplates()).to.be.an('object');
    });
  });

  describe('getTemplates', () => {
    it('Should return empty', () => {
      expect(getTemplates()).to.be.empty;
    });

    it('Should return the main template', () => {
      getTemplates();
      expect(getTemplates('main')).to.be.a('function');
    });
  });
});
