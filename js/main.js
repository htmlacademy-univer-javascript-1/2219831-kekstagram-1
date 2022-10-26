import {getPhotos} from './data.js';
import { createPhotosAround } from './thumbnail.js';

const data = getPhotos();
createPhotosAround(data);
