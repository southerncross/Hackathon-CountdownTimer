const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secsEl = document.getElementById('seconds');
const emojiEl = document.getElementById('emoji');

const hackathonStartDate = new Date(2022, 9, 20, 14);
const hackathonEndDate = new Date(2022, 9, 21, 12);

function countdown() {
    let newDate = null;
    const currentDate = new Date();
    if (currentDate <= hackathonStartDate) {
        newDate = hackathonStartDate;
        emojiEl.innerHTML = '🚀';
    } else if (currentDate <= hackathonEndDate) {
        newDate = hackathonEndDate;
        emojiEl.innerHTML = '⏰';
    } else {
        emojiEl.innerHTML = '🎊';
        return;
    }

    const totalSeconds = (newDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = minutes;
    secsEl.innerHTML = seconds;
}

// initial call
countdown();

setInterval(countdown, 1000);
