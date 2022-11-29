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

const CountComment = {
  MIN: 0,
  MAX: 23
};

const STEP_ADDED_COMMENTS = 5;
const DEFAULT_RENDERED_COMMENTS = 5;

const Effects = {
  'none': { name: 'none', filter: '', unit: '',
    options: {range: {min: 0, max: 100}, step: 1, start: 100},
  },
  'chrome': {name: 'chrome', filter: 'grayscale', unit: '',
    options: { range: {min: 0, max: 1}, step: 0.1, start: 1},
  },
  'sepia': { name: 'sepia', filter: 'sepia', unit: '',
    options: { range: {min: 0, max: 1}, step: 0.1, start: 1},
  },
  'marvin': { name: 'marvin', filter: 'invert', unit: '%',
    options: {range: {min: 0, max: 100}, step: 1, start: 100},
  },
  'phobos': {name: 'phobos', filter: 'blur', unit: 'px',
    options: {range: {min: 0, max: 3}, step: 0.1, start: 3},
  },
  'heat': {name: 'heat', filter: 'brightness', unit: '',
    options: {range: {min: 1, max: 3}, step: 0.1, start: 3},
  }
};

const SLIDER_STEP = 25;
const ScaleRange = {
  min: 25,
  max: 100
};

export {MAX_COUNT_PHOTOS, CountLike, MAX_COMMENT_LENGTH, MaxHashtag, ErrorMessage, STEP_ADDED_COMMENTS,
  DEFAULT_RENDERED_COMMENTS, CountComment, Effects, SLIDER_STEP, ScaleRange};
