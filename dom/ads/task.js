
let rotators = Array.from(document.querySelectorAll(".rotator__case"));
rotators.forEach(item => item.style.color = item.dataset.color);

let next;
let timerId;
let time;



let rotate = function () {
    if(timerId) {
        clearTimeout(timerId);
    }
    let actives = rotators.filter(item => item.classList.contains("rotator__case_active"));
    actives.forEach(item => {
        if(item.nextElementSibling === null){
            next = item.closest(".rotator").firstElementChild; //querySelector(".rotator__case")
        } else {
            next = item.nextElementSibling;
        }
        
        item.classList.remove("rotator__case_active");
        next.classList.add("rotator__case_active"); 
        timerId = setTimeout(rotate, Number(next.dataset.speed));
        
    })
}

setTimeout(rotate, 1000);




