var product = {
    name: "C.F. Martin OM-28E Modern Deluxe Acoustic Guitar with Pickup",
    price: 699.00,
    quantityInStock: 10,
    quantityInCart: 0,
    tags: ["Guitars"],
    image: "../images/products/guitars/OM28E/OM28E-Modern-Deluxe-Main.jpg",
    description: "The OM-28 Modern Deluxe is a new take on Martin Vintage. This guitar is packed with custom features and modern technology that you have to see, feel, and hear for yourself.",
    specifications: "Top Material: Sitka Spruce with VTS"
}

window.onload = function() {
    loadProductNames();
    loadProductDescription();
    loadProductImage();
    loadProductSpecs();
};

function loadProductNames() {
    var productNames = document.getElementsByClassName('product-name');
    for (const name of productNames) {
        name.innerHTML = product.name;
    }
}

function loadProductImage() {
    document.getElementById('main-product-img').src = product.image;
}

function loadProductDescription() {
    var productDescription = document.getElementById('product-description');
    productDescription.innerHTML = product.description;
}

function loadProductSpecs() {
    var productSpecs = document.getElementById('product-specs');
    productSpecs.innerHTML = product.specifications;
}

// updateQuantity() {
//     //
// }