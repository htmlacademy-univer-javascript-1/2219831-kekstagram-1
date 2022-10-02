const NAMES = ['Анастасия', 'Мария', 'Александр', 'Артём', 'Юлия'];
const MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = ['Когда радости нет предела.',
  'Любовь в каждом пикселе.',
  'Я не плачу - это просто дождь.',
  'Грусть, я тебя не боюсь.'
];
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

const CreateUserData = (id) => ({
  id,
  avatar: `img/avatar-${getRandomPositiveInteger(1, MAX_COUNT_PHOTOS)}.svg`,
  message: MESSAGES[getRandomPositiveInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)],
});

const CreatePhotoData = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: DESCRIPTIONS[getRandomPositiveInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomPositiveInteger(CountLike.MIN, CountLike.MAX),
  comments: Array.from({length: getRandomPositiveInteger(1, 6)}).map((value, index) => CreateUserData(index + 1)),
});

const PHOTOS = Array.from({length: MAX_COUNT_PHOTOS}).map((value, index) => CreatePhotoData(index + 1));
// eslint-disable-next-line no-console
console.log(CreatePhotoData(20).comments);
