import { expect } from 'chai';

import {
  getKeyPressed
} from '../src/components/utils';

describe('Utils file', () => {
  describe('getKeyPressed', () => {
    it('Should return undefined', () => {
      expect(getKeyPressed()).to.be.undeifned;
    });
  });
});