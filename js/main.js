function getRandomArbitrary(min,max){
  if (min > max) {
    const a = min;
    min = max;
    max = a;
  }
  if (min < 0){
    min = 0;
  }
  if (min === max) {
    return Math.round(min);
  }
  return Math.round(Math.random()*(max-min) + min); //формула с сайта MDN
}
const checkStringLength = (string, maxLength) => string.length <= maxLength;
// eslint-disable-next-line no-console
console.log(getRandomArbitrary(9,8));
checkStringLength('str',5);
