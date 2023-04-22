let links = Array.from(document.querySelectorAll(".menu__link"));

links.forEach(item => {
    item.onclick = () => {
        let isAcvtiveSub = item.closest(".menu").querySelector(".menu_active");
        let isSub = item.closest(".menu__item").querySelector(".menu_sub")
        
        if(isAcvtiveSub){
            if(isSub.classList.contains("menu_active")){
                isSub.classList.remove("menu_active");
                return false;
            }
            isAcvtiveSub.classList.remove("menu_active");
        }

        if(isSub){
            isSub.classList.add("menu_active");
            return false;
        }
    }
})