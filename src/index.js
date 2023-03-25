import './style.css';
import { getScoreboardFromApi } from './modules/getScoreboard.js';
import postScoreToApi from './modules/postScoreboard.js';

const submitBtn = document.querySelector('.submit-form');
const refreshBtn = document.querySelector('.refresh');

refreshBtn.addEventListener('click', getScoreboardFromApi);
submitBtn.addEventListener('click', postScoreToApi);
document.addEventListener('DOMContentLoaded', postScoreToApi);