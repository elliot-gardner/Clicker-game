const clickReadout = document.getElementById('clickReadout')
let totalClicks = "0";

function clickCounter() {
    console.log("Click")
    totalClicks ++;
    clickReadout.innerHTML = "Total Clicks: " + totalClicks;
}

document.addEventListener('click', clickCounter);