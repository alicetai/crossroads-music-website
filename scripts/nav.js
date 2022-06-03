/* Functions for actions on the nav bar */

// Update the display of number of cart items on the nav bar
function showCartBadge() {
    // Only show the badge if there are items
    let display = itemQuantity > 0 ? "block" : "none";
    document.getElementById("cart-quantity").style.display = display;
}