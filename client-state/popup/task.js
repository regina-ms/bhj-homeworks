
let modal = document.getElementById("subscribe-modal");
let modalClose = Array.from(document.querySelectorAll(".modal__close"));
modal.classList.add("modal_active");


let setCookie = function (name, value) {
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + "samesite=strict";
}

let getCookie = function (name) {
    if(document.cookie.includes(name)) {
        let pairs = document.cookie.split(";");
        let cookie = pairs.find(item => item.startsWith(name + "="));
        return cookie.substring(name.length + 1);
    }
}

if(getCookie("closed")) {
    modal.classList.remove("modal_active");
}

modalClose.forEach(item => {
    item.onclick = () =>{
        item.closest(".modal_active").classList.remove("modal_active");
        setCookie("closed", "true");
    }
})

