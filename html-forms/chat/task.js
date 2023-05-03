let widget = document.querySelector(".chat-widget");
let messages = widget.querySelector(".chat-widget__messages");
let input = document.getElementById("chat-widget__input");
let askQuastionInSec = 30;
let notActiveSec = 0;
let timer;
let date = (time) => {
    time = new Date;
    return time.toLocaleTimeString().slice(0,5)
}

let askQuastion = () => {
    messages.innerHTML += `
    <div class="message">
    <div class="message__time">${date()}</div>
    <div class="message__text">Чего молчим?</div>
    </div>`
}

let robotMessages = Array.from(document.querySelectorAll(".robot_messages__item"));

function randomMessage(arr) {
    let min = 0;
    let max = arr.length-1;
    let index = Math.floor(Math.random() * (max - min + 1)) + min;
    return arr[index].textContent;
}


widget.addEventListener("click", (e) => {
    widget.classList.add("chat-widget_active");
    if(timer) {
        clearInterval(timer);
    }
    timer = setInterval(()=> {
        notActiveSec++;
        if(notActiveSec % askQuastionInSec === 0) {
            askQuastion();
            messages.scrollIntoView(false);
        }
    }, 1000)
})


input.addEventListener("keyup", (e) => {
    notActiveSec = 0;
    if(e.key === "Enter") {
        if(!input.value) {
            return;
        }
        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${date()}</div>
                <div class="message__text">${input.value}</div>
            </div>`
        input.value = "";
        messages.scrollIntoView(false);

        setTimeout(() => {
            messages.innerHTML += `
                <div class="message">
                    <div class="message__time">${date()}</div>
                    <div class="message__text">${randomMessage(robotMessages)}</div>
                </div>`
            messages.scrollIntoView(false);
        }, 2000)
    }
})
