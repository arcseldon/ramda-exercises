// author arcseldon@icloud.com
'use strict';

// we have an outer function that when called returns a function unit
// when unit is called with a value, an object is returned - a Monad.
// and that object has a bind function, which when called with a function argument
// returns the result of invoking that function argment and passing in value.

function MONAD() {
  return function unit(value) {
    var monad = Object.create(null);
    monad.bind = function (func) {
      return func(value);
    };
    return monad;
  };
}

var unit = MONAD();
var monad = unit('Hello World!');
monad.bind(console.log);

