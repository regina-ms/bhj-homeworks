let loader = document.getElementById("loader");

let getCurrency = new XMLHttpRequest();

getCurrency.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
getCurrency.send();

let createElement = function(element, classList, text) {
    let elem = document.createElement(element);
    elem.classList.add(classList);
    elem.innerHTML = text;
    return elem;
}

getCurrency.onload = () =>{
    loader.classList.remove("loader_active")
    let rates = JSON.parse(getCurrency.response).response.Valute;
    
    for(let key in rates) {

        let itemCode = createElement("div", "item__code", rates[key].CharCode);
        let itemValue = createElement("div", "item__value", rates[key].Value);
        let itemCurrency = createElement("div", "item__currency", "руб.");

        if(document.querySelector(".item").children.length === 0) {
            document.querySelector(".item").append(itemCode, itemValue, itemCurrency);
        } else {
            let item = document.createElement("div");
            item.classList.add("item");
            item.append(itemCode, itemValue, itemCurrency);
            document.querySelector("#items").append(item);
        }
    }
}
