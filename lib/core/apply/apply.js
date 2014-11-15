//var assert = require('assert'),
//  R = require('ramda');

(function () {
// author arcseldon@icloud.com
  'use strict';

  // Ramda object is globally available as R.

  test('1. apply R.min over nums to get the smallest number', function (assert) {
    var fn = Math.min, nums = [1, 2, 3, -99, 42, 6, 7], result;
    //result = undefined;
    result = R.apply(fn, nums);
    assert.equal(result, -99, 'Error, try again');
  });

  test('1. apply R.max over nums to get the largest number', function (assert) {
    var fn = Math.max, nums = [1, 2, 3, -99, 42, 6, 7], result;
    //result = undefined;
    result = R.apply(fn, nums);
    assert.equal(result, 42, 'Error, try again');
  });

}());
