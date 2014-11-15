
var assert = require('assert');

var R = (function () {
// author arcseldon@icloud.com
  'use strict';
  /* jshint eqeqeq: false */

  var R = {};

  function _noArgsException() {
    return new TypeError('Function called with no arguments');
  }

  function _curry2(fn) {
    return function (a, b) {
      switch (arguments.length) {
        case 0:
          throw _noArgsException();
        case 1:
          return function (b) {
            return fn(a, b);
          };
        default:
          return fn(a, b);
      }
    };
  }

  function _concat(set1, set2) {
    set1 = set1 || [];
    set2 = set2 || [];
    var length1 = set1.length,
      length2 = set2.length,
      result = new Array(length1 + length2);

    for (var idx = 0; idx < length1; idx++) {
      result[idx] = set1[idx];
    }
    for (idx = 0; idx < length2; idx++) {
      result[idx + length1] = set2[idx];
    }
    return result;
  }

  function _indexOf(list, item, from) {
    var idx = 0, length = list.length;
    if (typeof from == 'number') {
      idx = from < 0 ? Math.max(0, length + from) : from;
    }
    for (; idx < length; idx++) {
      if (list[idx] === item) {
        return idx;
      }
    }
    return -1;
  }

  R.difference = _curry2(function difference(first, second) {
    var out = [];
    var idx = -1;
    var firstLen = first.length;
    while (++idx < firstLen) {
      if (_indexOf(second, first[idx]) === -1 && _indexOf(out, first[idx]) === -1) {
        out.push(first[idx]);
      }
    }
    return out;
  });

  function _append(el, list) {
    return _concat(list, [el]);
  }

  R.append = _curry2(_append);

  return R;

}());

var str = 'World!', arr = ['Hello'], result;
result = R.append(str, arr);
assert(R.difference(result, ['Hello', 'World!']).length === 0);
