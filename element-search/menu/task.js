let menuLinkArr = Array.from(document.querySelectorAll(".menu__link"));
let subMenuArr = Array.from(document.querySelectorAll(".menu_sub"));

menuLinkArr.forEach(item => {
    //debugger;
    item.onclick = () => {        
        subMenuArr.forEach(item => {
            if(item.classList.contains("menu_active")) {
                item.classList.remove("menu_active");
            }
        })
       if(item.nextElementSibling) {
            item.nextElementSibling.classList.add("menu_active");
            return false;
        }
    }
})


// не рпазобралась, как в задании использовать closest

