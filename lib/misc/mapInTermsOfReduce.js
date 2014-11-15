(function () {
// author arcseldon@icloud.com
  'use strict';

  var data = R.range(1, 4);
  var add1 = R.add(1);

  var mapInTermsOfReduce = function (fn, data) {
    var mapAccumulator = function (acc, cur) {
      var updated = fn(cur);
      return acc.concat(updated);
    };
    return R.reduce(mapAccumulator, [], data);
  };

  test('test data setup', function (assert) {
    console.log('data: ' + data);
    assert.deepEqual(data, [1, 2, 3], 'error');
  });

  test('test mapInTermsOfReduce', function (assert) {
    assert.deepEqual(mapInTermsOfReduce(add1, data), [2, 3, 4], 'error');
  });

}());
