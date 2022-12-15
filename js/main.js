import { initFilters } from './filter.js';
import { renderUploadForm } from './user-form.js';
import { getData } from './api.js';
import { showAlert } from './utils.js';

getData(initFilters, showAlert);
renderUploadForm();
