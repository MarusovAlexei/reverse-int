
module.exports = function reverse(n) {
  if (n < 0) n = n * (-1);

  var numToStr = n + '';
  var result = numToStr[numToStr.length - 1];

  for (var i = numToStr.length - 2; i >= 0; i--) {
    result += numToStr[i];
  }
  return result;
}