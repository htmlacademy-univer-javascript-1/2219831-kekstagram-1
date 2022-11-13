import { isEsc } from './util.js';

const fullScreenPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');


const getComments = (comments) => {
  const socialComments = document.querySelector('.social__comments');
  const commentsPart = document.createDocumentFragment();

  comments.forEach((comment) => {
    const socialComment = document.querySelector('.social__comment').cloneNode(true);
    socialComment.querySelector('.social__picture').src = comment.avatar;
    socialComment.querySelector('.social__picture').alt = comment.name;
    socialComment.querySelector('.social__text').textContent = comment.message;
    commentsPart.appendChild(socialComment);
  });

  socialComments.innerHTML = '';
  socialComments.appendChild(commentsPart);
};

const renderPicture = (picture) => {
  fullScreenPicture.querySelector('.social__comment-count').classList.add('hidden');
  fullScreenPicture.querySelector('.comments-loader').classList.add('hidden');
  fullScreenPicture.querySelector('.big-picture__img img').src = picture.url;
  fullScreenPicture.querySelector('.likes-count').textContent = picture.likes;
  fullScreenPicture.querySelector('.social__caption').textContent = picture.description;
  fullScreenPicture.querySelector('.comments-count').textContent = picture.comments.length;
  getComments(picture.comments);
};

const closePicture = () => {
  document.body.classList.remove('modal-open');
  fullScreenPicture.classList.add('hidden');
};

const onPictureEscKeydown = (evt) => {
  if(isEsc(evt)) {
    closePicture();
    document.removeEventListener('keydown', onPictureEscKeydown);
  }
};

const onPictureCloseButton = () => {
  closePicture();
  closeButton.removeEventListener('click', onPictureCloseButton);
  document.removeEventListener('keydown', onPictureEscKeydown);
};


const visualiseBigPicture = (element) => {
  document.body.classList.add('modal-open');
  fullScreenPicture.classList.remove('hidden');
  renderPicture(element);
  closeButton.addEventListener('click', onPictureCloseButton);
  document.addEventListener('keydown', onPictureEscKeydown);
};

export { visualiseBigPicture };
