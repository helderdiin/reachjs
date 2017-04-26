import {
  expect,
} from 'chai';

import {
  getKeyPressed,
} from '../src/components/utils';

describe('Utils file', () => {
  describe('getKeyPressed', () => {
    let event;

    beforeEach(() => {
      event = {
        keyCode: 7,
        which: 13,
      };
    });

    it('Should return undefined', () => {
      expect(getKeyPressed()).to.be.undeifned;
    });

    it('Should return keyCode (7) even with wich (13)', () => {
      const ret = getKeyPressed(event);

      expect(ret).to.be.defined;
      expect(ret).to.equal(7);
    });

    it('Should return keyCode (7) even without wich (13)', () => {
      delete event.which;
      const ret = getKeyPressed(event);

      expect(ret).to.be.defined;
      expect(ret).to.equal(7);
    });

    it('Should return wich (13)', () => {
      delete event.keyCode;
      const ret = getKeyPressed(event);

      expect(ret).to.be.defined;
      expect(ret).to.equal(13);
    });
  });
});
