(function () {
// author arcseldon@icloud.com
  'use strict';

  // Ramda object is globally available as R.

  test('1. use clone to get a copy of this array of strings', function (assert) {
    var arr = ['hello', 'world'], result;
    //result = undefined;
    result = R.clone(arr);
    assert.deepEqual(result, arr, 'Error, try again');
  });

  test('2. use clone to create a replica object inside a singleton array', function (assert) {
    var arr = [{ name: 'bob', age: 40}], result;
    //result = undefined;
    result = R.clone(arr);
    assert.equal(result[0].name, arr[0].name, 'Error, try again');
    assert.equal(result[0].age, arr[0].age, 'Error, try again');
  });

  test('3. use clone to create a replica object inside singleton array using R.of', function (assert) {
    var arr = R.of({ name: 'bob', age: 40}), result;
    //result = undefined;
    result = R.clone(arr);
    assert.equal(result[0].name, arr[0].name, 'Error, try again');
    assert.equal(result[0].age, arr[0].age, 'Error, try again');
  });

}());
