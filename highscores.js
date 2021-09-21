const scoresList = document.getElementById('scores');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

//This pulls the name & score from local storage and adds them to the unordered list element in the html//
scoresList.innerHTML =
highScores.map(score => {
    return `<li class="scores">${score.name} - ${score.score}</li>`;
}).join("");