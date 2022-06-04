// Cart functions

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
        price.innerHTML = dollarUS.format(totalPrice(product.price, totalCartQuantity))
    }
}

function deleteItem(e, current) {
    // Remove the element's HTML from the document
    setTimeout(() => {
        // current.parentElement.style.display = "none"
        current.parentElement.remove();
    }, 200); // don't remove it too quickly
}
