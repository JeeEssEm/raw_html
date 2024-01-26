function setCurrentYear() {
    let span = document.getElementById("#year");
    span.innerHTML = new Date().getFullYear();
}

function egeCountDown() {
    let span = document.getElementById("#ege");
    let now = new Date().getTime();
    let currYear;

    if (new Date().getMonth() <= 6 && new Date().getDay() <= 7) {
        currYear = new Date().getFullYear();
    }
    else {
        currYear = new Date().getFullYear() + 1;
    }

    let countDownDate = new Date(`June 7, ${currYear} 09:00:00`).getTime();
    let d = countDownDate - now;

    let days = Math.floor(d / (1000 * 60 * 60 * 24));
    let hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((d % (1000 * 60)) / 1000);
    let milliseconds = d - days * 1000 * 60 * 60 * 24 - hours * 60 * 60 * 1000 - minutes * 60 * 1000 - seconds * 1000;

    span.innerHTML = `${days} дней ${hours} ч ${minutes} мин ${seconds} с ${milliseconds}`;
}

setCurrentYear();
let suicide = setInterval(egeCountDown, 1);