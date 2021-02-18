window.onload = () => {
    let targetDate = new Date("February 18, 2021 17:26:00");

    let daysElt = document.getElementById("days");
    let hoursElt = document.getElementById("hours");
    let minutesElt = document.getElementById("minutes");
    let secondsElt = document.getElementById("seconds");

    function runCountdown(currentDate, targetDate) {
        let totalSeconds = (targetDate - currentDate) / 1000;

        let seconds = Math.floor(totalSeconds) % 60;
        let minutes = Math.floor(totalSeconds / 60) % 60;
        let hours = Math.floor(totalSeconds / 3600) % 24;
        let days = Math.floor(totalSeconds / (3600 * 24));

        if (days == 0 && minutes == 0 && hours == 0 && seconds == 0)
            stopCountdown();

        daysElt.innerHTML = formatTime(days);
        hoursElt.innerHTML = formatTime(hours);
        minutesElt.innerHTML = formatTime(minutes);
        secondsElt.innerHTML = formatTime(seconds);
    }

    function stopCountdown() {
        clearInterval(runTimer);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    let runTimer = setInterval(() => {
        runCountdown(new Date(), targetDate);
    }, 1000);
};
