// Cart functions
import {loadProductNames, loadProductPrice, loadProductImages} from './product.js';
import {loadTotalPrice} from './price.js';


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

// Add event listeners to delete button
function loadDelete() {
    let deleteButton = document.getElementsByClassName("delete-icon");

    for (var button of deleteButton) {
        button.addEventListener("click", function() {
            setTimeout(() => {
                // Remove the whole line
                this.parentElement.style.display = "none";
                this.parentElement.remove();
            }, 200); // don't remove it too quickly
        });
    };
}

// Update the display of the item total
// function updateItemTotal() {
//     //
// }