let products = document.querySelectorAll(".product");
let cartProducts = document.querySelector(".cart__products");
let cart = document.querySelector(".cart");
let productsList = document.querySelector(".products");
cart.style.display = "none";


let addNewProduct = function (element) {
    let product = document.createElement("div");
    product.classList.add("cart__product");
    product.dataset.id = element.closest(".product").dataset.id;

    let productImage = document.createElement("img");
    productImage.classList.add("cart__product-image");
    productImage.src = element.closest(".product").querySelector("img").src;

    let productCount = document.createElement("div");
    productCount.classList.add("cart__product-count");
    productCount.innerText = element.closest(".product").querySelector(".product__quantity-value").innerText;

    let productDelete = document.createElement("div");
    productDelete.classList.add("cart__product-delete");
    productDelete.innerHTML = "-";

    product.append(productImage);
    product.append(productCount);
    product.append(productDelete);
    cartProducts.append(product);
}

let changeQuantity = function(element) {
    if(element.classList.contains("product__quantity-control_dec")){
        if(element.closest(".product").querySelector(".product__quantity-value").innerText === "1"){
            return;
        }
        element.closest(".product").querySelector(".product__quantity-value").innerText --;
    }
    if(element.classList.contains("product__quantity-control_inc")){
        element.closest(".product").querySelector(".product__quantity-value").innerText ++;
    }
}

let ifInCart = function (array, element) {
    for(let item of array) {
        if(item.dataset.id === element.closest(".product").dataset.id) {
            return item;
        }
    }
}

let checkQuantity = function(element) {
    if(element.closest(".cart__product").querySelector(".cart__product-count").innerText < 2){
        element.closest(".cart__product").remove();
        return;
    }
    element.closest(".cart__product").querySelector(".cart__product-count").innerText--;
}

for(let item of products){ 
    item.addEventListener("click", (e) => {
        let target = e.target;

        if(target.classList.contains("product__quantity-control")) {
            changeQuantity(target);
        }
        
        if(target.classList.contains("product__add")) {
            cart.style.display = "block";
            let cartProductsList = Array.from(cartProducts.querySelectorAll(".cart__product"));
            
            if(cartProductsList.length === 0) {
                addNewProduct(target);
                return;
            }
            
            let productInCart = ifInCart(cartProductsList, target);
            
            if(productInCart) {
                productInCart.querySelector(".cart__product-count").innerText = Number(productInCart.querySelector(".cart__product-count").innerText) + Number(target.closest(".product").querySelector(".product__quantity-value").innerText);
            } else {
                addNewProduct(target);
            }
        }
    })
}

cartProducts.addEventListener("click", (e) => {
    let target = e.target;
    if(target.classList.contains("cart__product-delete")) {
        checkQuantity(target);
    }

    let productsList = Array.from(cartProducts.querySelectorAll(".cart__product"));
    if(productsList.length === 0){
        cart.style.display = "none";
    }
})


