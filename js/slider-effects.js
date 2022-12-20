import { Effect } from './consts.js';

const imageForChange = document.querySelector('.img-upload__preview').querySelector('img');
const slider = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');
const sliderWrapper = document.querySelector('.img-upload__effect-level');


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
  slider.noUiSlider.updateOptions(Effect[effect].options);

  slider.noUiSlider.on('update', () => {
    sliderValue.value = slider.noUiSlider.get();
    imageForChange.style.filter = `${Effect[effect].filter}(${sliderValue.value}${Effect[effect].unit})`;
  });
};


export { updateSliderSettings, createSlider };
