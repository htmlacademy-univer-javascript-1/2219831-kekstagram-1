const MAX_COUNT_PHOTOS = 25;

const CountLike = {
  MIN: 15,
  MAX: 200
};

const MAX_COMMENT_LENGTH = 140;

const MaxHashtag = {
  LENGTH: 20,
  COUNT: 5
};

const ErrorMessage = {
  SPACE_SEPARATION: 'Хэш-теги должны разделяться пробелами',
  START: 'Хэш-тег должен начинаться с символа # (решётка)',
  REPEAT_ERROR: 'Один и тот же хэш-тег не может быть использован дважды',
  HASHTAG_MAX_LENTH: `Максимальная длина одного хэш-тега ${MaxHashtag.LENGTH} символов, включая #`,
  HASHTAG_MAX_COUNT: `Нельзя указать больше ${MaxHashtag.COUNT} хэш-тегов`,
  UBNORMAL_SYMBOLS: 'Хэш-тег содержит недопустимые символы (строка после решётки должна состоять из букв и чисел)',
  COMMENT_MAX_LENGTH: `Максимальная длина комментария не может составлять больше ${MAX_COMMENT_LENGTH} символов`
};

export{MAX_COUNT_PHOTOS, CountLike, MAX_COMMENT_LENGTH, MaxHashtag, ErrorMessage};
