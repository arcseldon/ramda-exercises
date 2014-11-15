(function () {
// author arcseldon@icloud.com
  'use strict';

  // Ramda object is globally available as R.

  test('1. append a String b onto the end of a list', function (assert) {
    var str = 'world', arr = ['hello'], result;
//result = undefined;
    result = R.append(str, arr);
    assert.deepEqual(result, ['hello', 'world'], 'Error, try again');
  });

  test('2. append a String b onto the end of a list', function (assert) {
    var num = 4, arr = R.range(1, 4), result;
//result = undefined;
    result = R.append(num, arr);
    assert.deepEqual(result, [1, 2, 3, 4], 'Error, try again');
  });


  test('3. append a string to an empty array', function (assert) {
    var str = 'hello world', arr = [], result;
//result = undefined;
    result = R.append(str, arr);
    assert.deepEqual(result, ['hello world'], 'Error, try again');
  });

}());
