let modal = document.querySelector(".modal");
let modalClose = modal.querySelector(".modal__close");
let btnShowSucccess = modal.querySelector(".show-success");
let modalSuccess = document.querySelector("#modal_success");
let modalSuccessClose = modalSuccess.querySelector(".modal__close");

modal.classList.add("modal_active");

modalClose.onclick = () =>{
    modal.classList.remove("modal_active")
}

btnShowSucccess.onclick = () => {
    modal.classList.remove("modal_active");
    modalSuccess.classList.add("modal_active");
}

modalSuccessClose.onclick = () => {
    modalSuccess.classList.remove("modal_active");
}