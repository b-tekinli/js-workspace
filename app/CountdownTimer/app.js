var pause = document.querySelector('.pause');
var countdown = document.querySelector('#countdown');

var isActive = true;
var startMinutes = 10;
var time = startMinutes * 60;

pause.addEventListener('click', function() {
    isActive = !isActive;
});

setInterval(updateCountdown, 1000);

function updateCountdown() {
    if (!isActive) {
        return;
    }

    var minutes = Math.floor(time / 60);
    var seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    countdown.innerHTML = `${minutes}:${seconds}`;
    time--;
}
