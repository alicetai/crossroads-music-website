import {displayDiscount} from './discount.js';

// Get the URL params

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Get the item quantity from url parameter
var itemQuantity = urlParams.get("product-quantity");
var discountCode = "";

if (urlParams.has("discount-code")) {
    discountCode = urlParams.get("discount-code")
    if (discountCode) {
        displayDiscount();
        // applyDiscount
    }
} 

window.onload = function() {
    showStep(currentStep); // Display the first form step
    showCartBadge(totalCartQuantity);
    loadItemQuantities();
    loadItemPrices();
    showPriceRow(document.getElementById("cart-total-row"));
};

function showPriceRow(row) {
    row.style.display = "flex";
}

function removePriceRow(row) {
    row.style.display = "none";
}

function loadItemQuantities() {
    var quantities = document.getElementsByClassName("item-quantity");
    for (var quantity of quantities) {
        quantity.getElementsByTagName("p")[0].innerHTML = itemQuantity + "x";
    }
}

function loadItemPrices() {
    var prices = document.getElementsByClassName("item-price");
    for (var price of prices) {
        let subtotal = totalPrice(100.00, itemQuantity);
        price.getElementsByTagName("p")[0].innerHTML = dollarUS.format(subtotal)
    }
}

export {showPriceRow, removePriceRow};
