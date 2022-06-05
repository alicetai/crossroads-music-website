// Formatted price in USD
const dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

const SHIPPING_PRICE = 20.00; // Shipping price for express orders

function loadTotalPrice() {
    var prices = document.getElementsByClassName('items-price');
    for (const price of prices) {
        price.innerHTML = dollarUS.format(totalPrice(699, totalCartQuantity))
    }
}

function itemSum(numbers) {
    var total = 0;
    for (let i=0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

// Calculate the total price of a set of items
function totalPrice(cost, quantity) {
    return cost * quantity;
}

// Add the shipping price to total and display it
function addShippingPrice() {
    showPriceRow(document.getElementById("shipping-total-row"));
    var priceText = document.getElementById("shipping-total")
    priceText.innerHTML = dollarUS.format(SHIPPING_PRICE);
}

function removeShippingPrice() {
    removePriceRow(document.getElementById("shipping-total-row"));
}

// function updateCartSubtotal(newSubtotal) {
//     document.getElementById("cart-subtotal-text").innerHTML = dollarUS.format(newSubtotal);
// }