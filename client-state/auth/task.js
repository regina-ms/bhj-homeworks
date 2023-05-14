

let form = document.getElementById("signin__form");

let showWelcome = function () {
        document.getElementById("signin").classList.remove("signin_active");
        document.getElementById("welcome").classList.add("welcome_active");
        document.getElementById("user_id").innerHTML = localStorage.getItem("id");
}

let keys = Object.keys(localStorage);
for(let key of keys) {
    if(key === "id") {
        showWelcome();
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest;
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth", true);
    xhr.send(formData);
    xhr.onload = () => {
        if(JSON.parse(xhr.response).success === false) {
            alert("Неверный логин/пароль")
        } else {
            let userID = JSON.parse(xhr.response).user_id;
            localStorage.setItem("id", String(userID));
            showWelcome();
        }
        form.reset();
    }
})

document.getElementById("logout_btn").addEventListener("click", () => {
    document.getElementById("welcome").classList.remove("welcome_active");
    document.getElementById("signin").classList.add("signin_active");
    localStorage.clear();
})