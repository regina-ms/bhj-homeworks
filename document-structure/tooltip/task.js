let hasTooltip = document.querySelectorAll(".has-tooltip");
let tooltip = document.createElement("div");
tooltip.classList.add("tooltip");
tooltip.dataset.position = "top";

function getCoords(element) {
    let box = element.getBoundingClientRect();
    return {
        top: box.top + window.pageYOffset,
        left: box.left + window.pageXOffset
    }
}

function getPosition(ancor, position, element) {
    let ancorCoords = getCoords(ancor); 

    if(position === "top") {
         element.style.left = ancorCoords.left + "px";
         element.style.top = ancorCoords.top - element.offsetHeight + "px";
    }

    if(position === "left") {
        if(ancorCoords.left === 0) {
            position = "top";
            return getPosition(ancor, position, element);
        }
        element.style.left = ancorCoords.left - element.offsetWidth + "px";
        element.style.top = ancorCoords.top + "px";
    }

    if(position === "right") {
        element.style.left = ancorCoords.left + ancorCoords.width + "px";
        element.style.top = ancorCoords.top + "px";
    }

    if(position === "bottom") {
        element.style.left = ancorCoords.left + "px";
        element.style.top = ancorCoords.top + ancorCoords.height + "px";
    }
}


for (let item of hasTooltip) {
    item.onclick = () => {
        if (item.firstElementChild){
            item.firstElementChild.classList.remove("tooltip_active");
            item.firstElementChild.remove();
            return false;
        }
        tooltip.innerHTML = item.title;
        tooltip.classList.add("tooltip_active");
        tooltip.style.position = "absolute";
        item.insertAdjacentElement("beforeend", tooltip);
        getPosition(item, tooltip.dataset.position, tooltip);
        return false;
    }
}
