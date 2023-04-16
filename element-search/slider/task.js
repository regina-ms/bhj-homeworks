let sliderArr = Array.from(document.querySelectorAll(".slider__item"));
let activeSlider = document.querySelector(".slider__item_active");
let arrowPrev = document.querySelector(".slider__arrow_prev");
let arrowNext = document.querySelector(".slider__arrow_next");
let dotArr = Array.from(document.querySelectorAll(".slider__dot"));
let slideNumber = 0;

let showActiveDot = () => {
    for(let i = 0 ; i < dotArr.length; i++) {
        if(dotArr[i].classList.contains("slider__dot_active")) {
            dotArr[i].classList.remove("slider__dot_active");
        }
        if(i === slideNumber) {
            dotArr[i].classList.add("slider__dot_active");
        }
    }
}

let showNextSlider = () =>{
    for(let i = 0; i < sliderArr.length; i++) {
        if(sliderArr[i].classList.contains("slider__item_active")) {
            sliderArr[i].classList.remove("slider__item_active");
            activeSlider = sliderArr[i+1];     
            slideNumber = i+1;
        }
        if (!activeSlider) {
            activeSlider = sliderArr[0];
            slideNumber = 0;
        }
    }
    activeSlider.classList.add("slider__item_active");  
}

let showPrevSlider = () =>{
    for(let i = 0; i < sliderArr.length; i++) {
        if(sliderArr[i].classList.contains("slider__item_active")) {
            sliderArr[i].classList.remove("slider__item_active");
            activeSlider = sliderArr[i-1];
            slideNumber = i-1;
        }
        if (!activeSlider) {
            activeSlider = sliderArr[sliderArr.length-1];
            slideNumber = sliderArr.length-1;
        }
    }
    activeSlider.classList.add("slider__item_active");
}

showActiveDot(); 

arrowPrev.onclick = () => {
    showPrevSlider();   
    showActiveDot(); 
}

arrowNext.onclick = () => {
    showNextSlider();
    showActiveDot();
}

dotArr.forEach((item, index) => {
    item.onclick = () => {
        dotArr.forEach(item => {
            if(item.classList.contains("slider__dot_active")) {
            item.classList.remove("slider__dot_active")
        }})
        item.classList.add("slider__dot_active");
        slideNumber = index;
        
        sliderArr.forEach((item, index) => {
            if(item.classList.contains("slider__item_active")){
                item.classList.remove("slider__item_active");
            }
            if(index === slideNumber) {
                item.classList.add("slider__item_active");
            }
        })
    }
})

