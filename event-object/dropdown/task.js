

document.addEventListener("click", (e)=> {
    e.preventDefault();
    let target = e.target;

    if(target.classList.contains("dropdown__value")){
        target.closest(".dropdown").querySelector("ul").classList.toggle("dropdown__list_active");
    }

    if (target.classList.contains("dropdown__link")) {
        let value = target.closest(".dropdown").querySelector(".dropdown__value");
        value.textContent = target.textContent;
        target.closest(".dropdown").querySelector("ul").classList.remove("dropdown__list_active");
    }
})



