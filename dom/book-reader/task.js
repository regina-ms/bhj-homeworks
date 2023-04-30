let bookControl = document.querySelector(".book__controls")



bookControl.addEventListener("click", (e)=> {
    //debugger;
    e.preventDefault();
    let target = e.target;
    if(target.closest(".book__control").classList.contains("book__control_font-size")){
        e.currentTarget.querySelector(".font-size_active").classList.remove("font-size_active");
        book.style.fontSize = "";
        target.classList.add("font-size_active");
        if(target.dataset.size === "big") {
            target.dataset.size = "large";
        }
        book.style.fontSize = target.dataset.size;
        // 2 вариант решения 
        /*if (book.classList.length > 1) {
            Array.from(book.classList).forEach(item => {
                if(item !== "book") {
                    book.classList.remove(item);
                }
            });
        }
        target.classList.add("font-size_active");
        if(target.classList.length > 2) {
            book.classList.add(target.classList[1]);
        }*/
    }
    
    if(target.closest(".book__control").classList.contains("book__control_color")){
        e.currentTarget.querySelector(".color_active").classList.remove("color_active");
        book.style.color = "";
        target.classList.add("color_active");
        book.style.color = target.dataset.textColor;
    }

    if(target.closest(".book__control").classList.contains("book__control_background")) {
        target.closest(".book__control").querySelector(".color_active").classList.remove("color_active");
        book.style.background = "";
        target.classList.add("color_active");
        book.style.background = target.dataset.bgColor;
    }
})