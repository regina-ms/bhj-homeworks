let reveals = Array.from(document.querySelectorAll(".reveal"));

document.addEventListener("scroll", () => {
    reveals.forEach(item => {
        if(item.getBoundingClientRect().top < window.innerHeight) {
            item.classList.add("reveal_active");
        } 
        
        //для красоты:
        if(item.getBoundingClientRect().top < 0 || item.getBoundingClientRect().bottom > innerHeight) {
            item.classList.remove("reveal_active");
        }
    })
        
})