import { bringPicturesLife } from './thumbnail.js';
import { renderUploadForm } from './user-form.js';
import { getData } from './api.js';
import { showAlert } from './utils.js';

getData(bringPicturesLife, showAlert);
renderUploadForm();
