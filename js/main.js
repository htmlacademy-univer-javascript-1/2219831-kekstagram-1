function getRandomArbitrary(min,max){
  if (min > max) {
    const a = min;
    min = max;
    max = a;
  }
  min = min < 0 ? 0 : min;
  max = max < 0 ? 0 : max;
  return Math.round(Math.random()*(max-min) + min); //формула с сайта MDN
}
const checkStringLength = (string, maxLength) => string.length <= maxLength;
getRandomArbitrary(9,8);
checkStringLength('str',5);
