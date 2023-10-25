function addLeadingZero(value) {
    return value < 10 ? "0" + value : value;
}

function updateClock() {
    var currentTime = new Date();
    var hours = addLeadingZero(currentTime.getHours());
    var minutes = addLeadingZero(currentTime.getMinutes());
    var seconds = addLeadingZero(currentTime.getSeconds());
    var clockElement = document.getElementById('clock');
    clockElement.textContent = hours + ":" + minutes + ":" + seconds;
}

updateClock();