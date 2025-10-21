
const timeDiv = document.getElementById('time');

function updateTime() {
    const currentTime = Date.now();
    timeDiv.textContent = "Current Time is " + currentTime;
}

updateTime();
setInterval(updateTime, 1000);


