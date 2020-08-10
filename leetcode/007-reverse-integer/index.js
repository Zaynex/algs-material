/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let zX = Math.abs(x);
  let num = 0;
  while(zX > 0) {
    num = num * 10 + zX % 10;
    zX = Math.floor(zX / 10);
  }
  if(x < 0) {
    return num <= Math.pow(2, 31) ? -num : 0;
  } else {
    return num < Math.pow(2, 31) ? num : 0
  }
};

console.log(reverse(-123));