let menuLinkArr = Array.from(document.querySelectorAll(".menu__link"));
let subMenuArr = Array.from(document.querySelectorAll(".menu_sub"));

menuLinkArr.forEach(item => {
    item.onclick = () => {        
        subMenuArr.forEach(item => {
            if(item.classList.contains("menu_active")) {
                item.classList.remove("menu_active");
            }
        })
       if(item.nextElementSibling.matches(".menu_sub")) {
            item.nextElementSibling.classList.add("menu_active");
            return false;
        }
    }
})




