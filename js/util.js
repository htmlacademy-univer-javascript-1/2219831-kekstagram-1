const MAX_COUNT_PHOTOS = 25;

const CountLike = {
  MIN: 15,
  MAX: 200
};

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const checkStringLength = (string, length) => string.length <= length;
checkStringLength('чтобы линтер не ругался', 60);

export{MAX_COUNT_PHOTOS, CountLike, getRandomPositiveInteger};
