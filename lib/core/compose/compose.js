(function () {
// author arcseldon@icloud.com
  'use strict';

  // Ramda object is globally available as R.
  var square = function(x) { return x * x; };
  var double = function(x) { return x * 2; };
  var triple = function(x) { return x * 3; };

  test('1. use compose to triple, square then double whatever input is provided', function (assert) {
    //var tripleSquareThenDouble = undefined;
    var tripleSquareThenDouble = R.compose(double, square, triple);
    assert.equal(tripleSquareThenDouble(2), double(square(triple(2))), 'Error, try again');
  });

  test('1. use compose to square, triple, then square again whatever input is provided', function (assert) {
    //var squareTripleThenSquare = undefined;
    var squareTripleThenSquare = R.compose(square, triple, square);
    assert.equal(squareTripleThenSquare(2), 144, 'Error, try again');
  });

  test('1. use compose with two functions triple and squareThenDouble, first tripling then applying squareThenDouble', function (assert) {
    //var squareThenDouble = undefined;
    //var tripleThenSquareThenDouble = undefined;
    var squareThenDouble = R.compose(double, square);
    var tripleThenSquareThenDouble = R.compose(squareThenDouble, triple);
    assert.equal(squareThenDouble(5), 50, 'Error, try again');
    assert.equal(tripleThenSquareThenDouble(4), 288, 'Error, try again');
  });

}());
