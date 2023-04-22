const slides = Array.from(document.querySelectorAll(".slider__item"));
let arrowNext = document.querySelector(".slider__arrow_next");
let arrowPrev = document.querySelector(".slider__arrow_prev");
let dots = document.querySelectorAll(".slider__dot");
let position = 0;
//dots[position].classList.add("slider__dot_active");

function findActiveSlide(position) {
    let index = slides.findIndex(item => item.classList.contains("slider__item_active"));
    slides[index].classList.remove("slider__item_active");
    dots[index].classList.remove("slider__dot_active");
    if(position < 0) {
        slides[length-1].classList.add("slider__item_active");
        dots[length-1].classList.add("slider__dot_active");
    } else if(position > slides.length-1 || position >= slides.length) {
        slides[0].classList.add("slider__item_active");
        dots[0].classList.add("slider__dot_active");
    } else {
        slides[position].classList.add("slider__item_active");
        dots[position].classList.add("slider__dot_active");
    }
}

arrowNext.onclick = () => {
    if(position >= slides.length-1) {
        position = 0;
    } else {
        position++;
    }
    findActiveSlide(position);
}

arrowPrev.onclick = () => {
    if(position <= 0) {
        position = slides.length-1;
    } else {
        position--;
    }
    findActiveSlide(position);
}

dots.forEach((item, index) => {
    item.onclick= ()=> {
        position = index;
        findActiveSlide(position);
    }
})









































































