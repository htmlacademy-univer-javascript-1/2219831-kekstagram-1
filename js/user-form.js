import { isEscKey } from './utils.js';
import { showMessage } from './message.js';
import { onCommentInput, onHashtagsInput, pristine, getError } from './validate.js';
import { updateSliderSettings } from './slider-effects.js';
import {sendData} from './api.js';
import { createSlider } from './slider-effects.js';
import { SCALE_STEP, ScaleRange } from './consts.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const file = document.querySelector('#upload-file');
const body = document.querySelector('body');
const imgUpload = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const closeButton = form.querySelector('.img-upload__cancel');
const comments = form.querySelector('.text__description');
const hashtags = form.querySelector('.text__hashtags');
const imageForChange = document.querySelector('.img-upload__preview').querySelector('img');
const uploadEffects = document.querySelector('.img-upload__effects');
const submitButton = document.querySelector('.img-upload__submit');
const fileChooser = document.querySelector('.img-upload__start input[type=file]');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');

const checkScaleClicks = (val) => {
  val = Math.min(Math.max(val, ScaleRange.MIN), ScaleRange.MAX);
  return val;
};

const changeScale = (val) => {
  const sliderNumber = checkScaleClicks(Number(scaleControlValue.value.replace('%', '')) + SCALE_STEP * val);
  imageForChange.style.transform = `scale(${sliderNumber / 100})`;
  scaleControlValue.value = `${sliderNumber}%`;
};


const closePopup = () => {
  imgUpload.classList.add('hidden');
  body.classList.remove('modal-open');
  document.querySelector('.img-upload__effect-level').classList.add('hidden');
  form.reset();
};


const onButtonEscKeydown = (evt) => {
  if (isEscKey(evt)) {
    closePopup();
    document.removeEventListener('keydown', onButtonEscKeydown);
  }
};

const onCloseButtonClick = () => {
  closePopup();
  document.removeEventListener('keydown', onButtonEscKeydown);
};

const checkFieldInFocus = (field) => {
  field.addEventListener('focus', () => {
    document.removeEventListener('keydown', onButtonEscKeydown);
  });

  field.addEventListener('blur', () => {
    document.addEventListener('keydown', onButtonEscKeydown);
  });
};

const onCommentDisableSubmitBtn = () => {
  submitButton.disabled = !pristine.validate();
};

const onHashtagDisableSubmitBtn = () => {
  submitButton.disabled = !pristine.validate();
};

const onScaleBiggerClick = () => {
  changeScale(1);
};

const onScaleSmallerClick = () => {
  changeScale(-1);
};

const onImgUploadFieldChange = () => {
  imageForChange.removeAttribute('class');
  imageForChange.removeAttribute('style');
  imgUpload.classList.remove('hidden');
  body.classList.add('modal-open');
  closeButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown',onButtonEscKeydown);
  checkFieldInFocus(comments);
  checkFieldInFocus(hashtags);
  uploadEffects.addEventListener('change', updateSliderSettings);
};


const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};


const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};


const renderUploadForm = () => {
  scaleControlBigger.addEventListener('click', onScaleBiggerClick);
  scaleControlSmaller.addEventListener('click', onScaleSmallerClick);
  createSlider();
  fileChooser.addEventListener('change', () => {
    const upload = fileChooser.files[0];
    const fileName = upload.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      imageForChange.src = URL.createObjectURL(upload);
    }
  });
  file.addEventListener('change', onImgUploadFieldChange);
  hashtags.addEventListener('input', onHashtagDisableSubmitBtn);
  comments.addEventListener('input', onCommentDisableSubmitBtn);
  pristine.addValidator(hashtags, onHashtagsInput, getError);
  pristine.addValidator(comments, onCommentInput, getError);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (pristine.validate()) {
      blockSubmitButton();
      sendData(() => {
        showMessage();
        unblockSubmitButton();
        closePopup();
      },
      () => {
        showMessage(true);
        unblockSubmitButton();
      },
      new FormData(e.target),
      );
    }
  });
};

export { renderUploadForm };
