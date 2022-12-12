import { Effects, SCALE_STEP, ScaleRange } from './consts.js';

const imageForChange = document.querySelector('.img-upload__preview').querySelector('img');
const slider = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');
const sliderWrapper = document.querySelector('.img-upload__effect-level');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');

const checkScaleClicks = (val) => {
  if (val > ScaleRange.MAX) {
    val = ScaleRange.MAX;
  }
  if (val <= ScaleRange.MIN){
    val = ScaleRange.MIN;
  }
  return val;
};

const changeScale = (val) => {
  const sliderNumber = checkScaleClicks(Number(scaleControlValue.value.replace('%', '')) + SCALE_STEP * val);
  imageForChange.style.transform = `scale(${sliderNumber / 100})`;
  scaleControlValue.value = `${sliderNumber}%`;
};

const onScaleButtonClick = () => {
  scaleControlBigger.addEventListener('click', () => changeScale(1));
  scaleControlSmaller.addEventListener('click', () => changeScale(-1));
};

const createSlider = () => {
  sliderWrapper.classList.add('hidden');
  noUiSlider.create(slider, {
    range: {min: 0, max: 100}, start: 100, step: 0.1,
    format: {
      to: (value) => (Number.isInteger(value)) ? value.toFixed(0) : value.toFixed(1),
      from: (value) => parseFloat(value),
    },
  });
};

const updateSliderSettings = (evt) => {
  const effect = evt.target.value;
  if (effect === 'none') {
    sliderWrapper.classList.add('hidden');
    imageForChange.style.filter = 'none';
    return;
  }

  sliderWrapper.classList.remove('hidden');
  imageForChange.removeAttribute('class');
  imageForChange.classList.add(`effects__preview--${effect}`);
  slider.noUiSlider.updateOptions(Effects[effect].options);

  slider.noUiSlider.on('update', () => {
    sliderValue.value = slider.noUiSlider.get();
    imageForChange.style.filter = `${Effects[effect].filter}(${sliderValue.value}${Effects[effect].unit})`;
  });
};


export {updateSliderSettings, createSlider, onScaleButtonClick};
