import { bringPicturesLife } from './thumbnail.js';
import { renderUploadForm } from './userForm.js';
import { createSlider } from './effects.js';
import {getData} from './api.js';

getData(bringPicturesLife);
renderUploadForm();
createSlider();
