let menuMain = document.querySelector(".menu_main");
let menuMainLinksArr = Array.from(menuMain.querySelectorAll(".menu__link"));
let mainSubMenuArr = Array.from(menuMain.querySelectorAll(".menu_sub"));
let menuFooter = document.querySelector(".menu_footer");
let menuFooterLinksArr = Array.from(menuFooter.querySelectorAll(".menu__link"));
let footerSubMenuArr = Array.from(menuFooter.querySelectorAll(".menu_sub"));

menuMainLinksArr.forEach(item => {
    item.onclick = () => {        
        mainSubMenuArr.forEach(item => {
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

menuFooterLinksArr.forEach(item => {
    item.onclick = () => {        
        footerSubMenuArr.forEach(item => {
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




