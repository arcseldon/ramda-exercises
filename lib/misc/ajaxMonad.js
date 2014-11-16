// author arcseldon@icloud.com
'use strict';

function MONAD() {
  var prototype = Object.create(null);
  function unit(value) {
    var monad = Object.create(prototype);
    monad.bind = function (func, args) {
      return func.apply(undefined,
        [value].concat(Array.prototype.slice.apply(args || [])));
    };
    return monad;
  }

  //unit.method = function (name, func) {
  //  prototype[name] = func;
  //  return unit;
  //};

  unit.lift = function (name, func) {
    prototype[name] = function () {
      var args = Array.prototype.slice.apply(arguments);
      return unit(this.bind(func, args));
    };
    return unit;
  };
  return unit;
}

var print = function (msg) {
  console.log(msg);
};

var ajax = MONAD().lift('print', print);
var monad = ajax('Hello World!');

// can now call either and will work:

monad.bind(print);
monad.print();




