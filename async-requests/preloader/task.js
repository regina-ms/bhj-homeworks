let loader = document.getElementById("loader");

let getCurrency = new XMLHttpRequest();

getCurrency.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
getCurrency.send();

getCurrency.onload = () =>{
    loader.classList.remove("loader_active")
    let rates = JSON.parse(getCurrency.response).response.Valute;
    console.log(rates);
    for(let key in rates) {
        console.log(rates[key].Value);
        let itemCode = document.createElement("div");
        itemCode.classList.add("item__code");
        itemCode.innerHTML = rates[key].CharCode;
        let itemValue = document.createElement("div");
        itemValue.classList.add("item__value");
        itemValue.innerHTML = rates[key].Value;
        let itemCurrency = document.createElement("div");
        itemCurrency.classList.add("item__currency");
        itemCurrency.innerHTML = "руб.";

        if(document.querySelector(".item").children.length === 0) {
            document.querySelector(".item").append(itemCode);
            document.querySelector(".item").append(itemValue);
            document.querySelector(".item").append(itemCurrency);
        } else {
            let item = document.createElement("div");
            item.classList.add("item");
            item.append(itemCode);
            item.append(itemValue);
            item.append(itemCurrency);
            document.querySelector("#items").append(item);
        }
    }
}
