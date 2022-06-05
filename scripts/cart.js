// Cart functions
import {loadProductNames, loadProductPrice, loadProductImages} from './product.js';

window.onload = function() {
    loadCart();
    showCartBadge(totalCartQuantity);
};


// Load cart content
function loadCart() {
    if (totalCartQuantity > 0) {
        showCart();

        // Load items
        loadProductNames();
        loadProductImages();
        loadProductPrice();
        loadTotalPrice();
        loadDelete();
    }
}

function showCart() {
    // Hide the empty cart
    document.getElementById("empty-cart-form").style.display = "none";
    // Show cart content
    document.getElementById("cart-form").style.display = "block";
};

// var product = {
//     name: "C.F. Martin OM-28E Modern Deluxe Acoustic Guitar with Pickup",
//     price: 699.00,
//     quantity: 0,
//     image: "images/products/guitars/OM28E/OM28E-Modern-Deluxe-Main.jpg",
// }

function loadTotalPrice() {
    // Format price in USD
    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
    var prices = document.getElementsByClassName('items-price');
    for (const price of prices) {
        price.innerHTML = dollarUS.format(totalPrice(699, totalCartQuantity))
    }
}

// Add event listeners to delete button
function loadDelete() {
    let deleteButton = document.getElementsByClassName("delete-icon");

    for (var button of deleteButton) {
        button.addEventListener("click", function() {
            console.log("removing...");
            setTimeout(() => {
                // Remove the whole line
                this.parentElement.remove();
                this.parentElement.style.display = "none";
        
            }, 200); // don't remove it too quickly
        });
    };
}
