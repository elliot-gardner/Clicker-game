const latestScore = localStorage.getItem("latestScore");
const recentScore = document.getElementById("recentScore");
const username = document.getElementById("name")


//Gives score readout//
recentScore.innerHTML = "You Scored: " + latestScore + "!"