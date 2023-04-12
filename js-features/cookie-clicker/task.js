"use strict";

let cookie = document.getElementById("cookie");
let counter = document.getElementById("clicker__counter");
let speed = document.getElementById("clicker__speed");
let previousClickDate;


cookie.onclick = () => {
    //debugger;
    let clickDate = Date.now();
    
    if (counter.textContent === "0"){
        speed.textContent = 0;
    } else {
        speed.textContent = (1 / (clickDate - previousClickDate) * 1000).toFixed(2);
    }
    counter.textContent ++;
    if(cookie.width === 200){
        cookie.width = 300;
    } else {
        cookie.width = 200;
    }
    previousClickDate = clickDate;
    
    
}