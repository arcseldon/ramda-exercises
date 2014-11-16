// author arcseldon@icloud.com
'use strict';

function MONAD(modifier) {
  var prototype = Object.create(null);
  function unit(value) {
    var monad = Object.create(prototype);
    monad.bind = function (func, args) {
      return func(value, Array.prototype.slice.apply(args || []));
    };
    if (typeof modifier === 'function') {
      modifier(monad, value);
    }
    return monad;
  }
  return unit;
}

var maybe = MONAD(function (monad, value) {
  if (value === null || value === undefined) {
    monad.is_null = true;
    monad.bind = function () {
      return monad;
    };
  }
});

var print = function (msg) {
  console.log(msg);
};

var monad = maybe(null);
//var monad = maybe('Hello World!');
monad.bind(print);













