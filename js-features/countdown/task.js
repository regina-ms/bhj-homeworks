// Задание 1 
/*let timer = document.getElementById("timer"); 
let seconds = Number(timer.textContent);

let counter = setInterval (() => {
    seconds--;
    timer.textContent = seconds;
}, 1000);

setTimeout(() => {
    clearInterval(counter);
    alert("Вы победили в конкурсе!");
}, seconds * 1000);*/


// Задание 2-3
let timer = document.getElementById("timer"); 
let secondsInHTML = timer.textContent; 
let deadline = new Date(Date.parse(new Date) + secondsInHTML * 1000);
let timerId = null;
let link = document.getElementById("link");

let counter = function() {
    let diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
      alert("Вы победили в конкурсе!");
      link.click();
    }

    let hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    let minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    let seconds = diff > 0 ? Math.ceil(diff / 1000) % 60 : 0;

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return timer.textContent = hours + ":" + minutes + ":" + seconds;
}

counter();

timerId = setInterval(counter, 1000);












