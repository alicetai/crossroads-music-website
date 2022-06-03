// Cart functions

// Load cart items
function loadCart() {
}

function addItem() {
    // Display confirmation
    const confirmation = document.getElementById('added-confirmation');
    confirmation.style.display = "block";

    // Remove the alert after 5 seconds
    setTimeout(() => {
        confirmation.style.display = 'none';
    }, 5000);
}

// var product = {
//     name: "C.F. Martin OM-28E Modern Deluxe Acoustic Guitar with Pickup",
//     price: 699.00,
//     quantity: 0,
//     image: "images/products/guitars/OM28E/OM28E-Modern-Deluxe-Main.jpg",
// }

