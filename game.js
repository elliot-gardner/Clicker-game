const clickReadout = document.getElementById('clickReadout')
const timer = document.getElementById('timer')

let totalClicks = "0";
let timeAllowed = 10;

// This is the click counter  & the event listener that tracks the clicks //
function clickCounter() {
    console.log("Click")
    totalClicks ++;
    clickReadout.innerHTML = "Total Clicks: " + totalClicks;
}

document.addEventListener('click', clickCounter);

// Function to let the user know that the game is over, then redirect to end game screen//
function endGame() {
    alert("Times up!");
    window.location.replace("./end.html")
}

// Countdown function, if there is remaining time then time allowed is decremented by 1, stops counting down at 0 then calls the endgame function //
function countDown() {
    if (timeAllowed <= 0) {
    clearInterval(countDownTimer);
    endGame();
} 
else {
    console.log("Countdown function works");
    timeAllowed -= 1;
    timer.innerHTML = "Time: " + timeAllowed;
}
}

// this variable calls the function "countDown" every 1000ms (1 second) //
var countDownTimer = setInterval(countDown, 1000);