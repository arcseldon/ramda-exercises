//var assert = require('assert'),
//  R = require('ramda');


(function () {
// author arcseldon@icloud.com
  'use strict';

  var result = R.concat([4, 5, 6], ['D','E','F']); //=> [ 4, 5, 6, 'D', 'E', 'F' ]
  //var result = R.concat([4, 5, 6], 'DEF'); //=> Error
  console.log(result);


  // Ramda object is globally available as R.

  test('1. use concat to concatenate arr2 onto the end of arr1', function (assert) {
    var arr1 = ['h','e','l','l','o'], arr2 = ['w','o','r','l','d'], result;
    //result = undefined;
    result = R.concat(arr1, arr2);
    assert.deepEqual(result, ['h','e','l','l','o','w','o','r','l','d'], 'Error, try again');
  });

  test('2. use concat to concatenate str2 onto the end of str1', function (assert) {
    var str1 = 'Hello', str2 = ' World!', result;
    //result = undefined;
    result = R.concat(str1, str2);
    assert.equal(result, 'Hello World!', 'Error, try again');
  });

  test('3. use compose and concat twice to concatenate 3 strings to produce Goodbye cruel World!', function (assert) {
    var str1 = 'Goodbye', str2 = ' cruel ', str3 = 'World!', result;
    //result = undefined;
    result = R.compose(R.concat(str1), R.concat(str2));
    assert.equal(typeof result, 'function');
    assert.equal(result(str3), 'Goodbye cruel World!', 'Error, try again');
  });

}());
