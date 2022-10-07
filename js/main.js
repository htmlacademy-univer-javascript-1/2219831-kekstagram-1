import { MAX_COUNT_PHOTOS } from './util';
import { CreatePhotoData } from './data';


// eslint-disable-next-line no-unused-vars
const PHOTOS = Array.from({length: MAX_COUNT_PHOTOS}).map((value, index) => CreatePhotoData(index + 1));

