/* eslint-disable no-undef, func-names */
import reachjs from './reachjs';

(function (global, factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = global.document ?
      factory(global, false) :
      (w) => {
        if (!w.document) {
          throw new Error('reachjs requires a window with a document');
        }
        return factory(w);
      };
  } else {
    factory(global);
  }
}(typeof window !== 'undefined' ? window : this, (window, noGlobal) => {
  if (typeof define === 'function' && define.amd) {
    define('reachjs', [], () => {
      return reachjs;
    });
  }

  /* eslint-disable no-param-reassign */
  if (!noGlobal) {
    window.reachjs = reachjs;
  }

  return reachjs;
}));
