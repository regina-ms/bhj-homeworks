
let rotators = Array.from(document.querySelectorAll(".rotator__case"));
rotators.forEach(item => item.style.color = item.dataset.color);

let active;
let next;



let rotate = function () {
    active = rotators.filter(item => item.classList.contains("rotator__case_active"));
    active.forEach(item => {
        if(item.nextElementSibling === null){
            next = item.closest(".rotator").querySelector(".rotator__case")
        } else {
            next = item.nextElementSibling;
        }
        
        item.classList.remove("rotator__case_active");
        next.classList.add("rotator__case_active"); 
        
    })
}

setInterval(rotate, 1000); 




