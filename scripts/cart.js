// Cart functions

window.onload = function() {
    loadCart();
    showCartBadge(totalCartQuantity);
};


// Load cart items
function loadCart() {
    if (totalCartQuantity > 0) {
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


function deleteItem(e, current) {
    // Remove the element's HTML from the document
    setTimeout(() => {
        // current.parentElement.style.display = "none"
        current.parentElement.remove();
    }, 200); // don't remove it too quickly
}