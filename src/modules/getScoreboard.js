const scoreboard = document.querySelector('.scoreboard');
const apiCode = 'NvYHfEPmQZtyuBJeIesV';
const apiUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiCode}/scores/`;

const getScoreboardFromApi = async () => {
  const response = await fetch(apiUrl);
  const scoresObjectArray = await response.json();
  scoreboard.innerHTML = '';
  scoresObjectArray.result.forEach((object) => {
    const userName = object.user;
    const userScore = object.score;
    scoreboard.innerHTML += `
      <div class="score">${userName}: ${userScore}</div>
      `;
  });
};

export { apiUrl, getScoreboardFromApi };