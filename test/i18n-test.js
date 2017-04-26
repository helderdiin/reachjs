import {
  expect,
} from 'chai';

import {
  setLocale,
  getLocale,
  getText,
  getTexts,
} from '../src/components/i18n';

describe('i18n file', () => {
  describe('setLocale', () => {
    it('Should set locale to br without pass params', () => {
      setLocale();
      expect(getLocale()).to.equal('br');
    });

    it('Should set the new locale', () => {
      setLocale('us');
      expect(getLocale()).to.equal('us');
    });
  });

  describe('getTexts', () => {
    it('Should return all locale texts', () => {
      setLocale();
      let texts = getTexts();

      expect(Object.keys(texts)).to.have.length.above(0);
      expect(texts['close-button']).to.equal('Fechar');

      setLocale('us');
      texts = getTexts();

      expect(Object.keys(texts)).to.have.length.above(0);
      expect(texts['close-button']).to.equal('Close');
    });
  });

  describe('getText', () => {
    it('Should return empty', () => {
      expect(getText()).to.be.empty;
    });

    it('Should return locale text to no-items-found', () => {
      setLocale();
      expect(getText('no-items-found')).to.equal('Nenhum item encontrado.');

      setLocale('us');
      expect(getText('no-items-found')).to.equal('No items found.');
    });
  });
});
