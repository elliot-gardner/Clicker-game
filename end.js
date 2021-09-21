const latestScore = localStorage.getItem("latestScore");
const recentScore = document.getElementById("recentScore");
const username = document.getElementById("name")

// Code below is from James Q Quick's youtube tutorial on saving high scores to local storage. //
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

saveScore = e => {
e.preventDefault();

const score = {
    score: latestScore,
    name: username.value
};
highScores.push(score);
highScores.sort((a, b) => b.score - a.score);
highScores.splice(5);

localStorage.setItem('highScores', JSON.stringify(highScores));
window.location.replace("./highscores.html");
}

//Gives score readout//
recentScore.innerHTML = "You Scored: " + latestScore + "!"