// Functions for actions on the nav bar

// Update the display of number of cart items on the nav bar
function showCartBadge(quantity) {
    // Only show the badge if there are items in the cart
    let display = quantity > 0 ? "block" : "none";
    document.getElementById("cart-quantity").style.display = display;
    document.getElementById("cart-quantity-badge").innerHTML = quantity;
}
