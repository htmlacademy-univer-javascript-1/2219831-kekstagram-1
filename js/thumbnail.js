import { openBigPicture } from './big-picture.js';

const getPictureTemplate = ({id, url, comments, likes}) => `<a href="#" class="picture js-picture" data-id="${id}">
<img class="picture__img" src="${url}" width="182" height="182" alt="Случайная фотография">
<p class="picture__info">
  <span class="picture__comments">${comments.length}</span>
  <span class="picture__likes">${likes}</span>
</p>
</a>`;

const mainContainer = document.querySelector('.js-pictures');
const createPhotosAround = (data) => mainContainer.insertAdjacentHTML('beforeend', data.map((photo) => getPictureTemplate(photo)).join(''));


const bringPicturesLife = (data) => {
  createPhotosAround(data);
  mainContainer.addEventListener('click', (evt) => {
    evt.preventDefault();
    const target = evt.target;
    const parent = target.closest('.js-picture');
    if (parent) {
      const id = parent.dataset.id;
      const [ photo ] = data.filter((element) => element.id === +id);
      openBigPicture(photo);
    }
  });
};

export { bringPicturesLife };
