const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function setTime() {
    const currentTime = new Date();

    const seconds = currentTime.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = currentTime.getMinutes();
    const minutesDegrees = (minutes / 60) * 360 + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = currentTime.getHours();
    const hoursDegrees = (hours / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
setInterval(setTime, 1000);
