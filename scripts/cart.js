// Cart functions

window.onload = function() {
    loadCart();
};


// Load cart items
function loadCart() {
    if (itemQuantity > 0) {
        showCart();
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

