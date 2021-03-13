module.exports = function reverse (n) {
  let nToString = Math.abs(n).toString();
  let resArr = [];
  for (let i = nToString.length - 1; i >= 0; i--) {
    resArr.push(nToString.charAt(i));
  }
  return +resArr.join('');
}
