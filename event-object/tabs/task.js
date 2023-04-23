let tabs = Array.from(document.querySelectorAll(".tab"));
let tabsContent = Array.from(document.querySelectorAll(".tab__content"));


tabs.forEach((item, index) => {

    item.addEventListener("click", () => {

    item.closest(".tabs").querySelector(".tab_active").classList.remove("tab_active");
    item.closest(".tabs").querySelector(".tab__content_active").classList.remove("tab__content_active");
    item.classList.add("tab_active");
    tabsContent[index].classList.add("tab__content_active");
    }
)
})


