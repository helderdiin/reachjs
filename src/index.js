import reachjs from './reachjs';

(function( global, factory ) {
  "use strict";

  if ( typeof module === "object" && typeof module.exports === "object" ) {
    module.exports = global.document ?
      factory( global, false ) :
      function( w ) {
        if ( !w.document ) {
          throw new Error( "reachjs requires a window with a document" );
        }
        return factory( w );
      };
  } else {
    factory( global );
  }
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
  "use strict";

  if ( typeof define === "function" && define.amd ) {
    define( "reachjs", [], function() {
      return reachjs;
    } );
  }

  if ( !noGlobal ) {
    window.reachjs = reachjs;
  }

  return reachjs;
});