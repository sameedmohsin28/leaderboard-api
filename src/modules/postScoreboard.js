import { apiUrl, getScoreboardFromApi } from './getScoreboard.js';

const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');

const postScoreToApi = async () => {
  const userNameInput = nameInput.value;
  const userScoreInput = scoreInput.value;
  await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: userNameInput,
      score: userScoreInput,
    }),
  });
  nameInput.value = '';
  scoreInput.value = '';
  getScoreboardFromApi();
};

export default postScoreToApi;