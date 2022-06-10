var product = {
    name: "C.F. Martin OM-28E Modern Deluxe Acoustic Guitar with Pickup",
    price: 699.00,
    quantityInStock: 5,
    tags: ["Guitars"],
    image: "images/products/guitars/OM28E/OM28E-Modern-Deluxe-Main.jpg",
    description: "The OM-28 Modern Deluxe is a new take on Martin Vintage. This guitar is packed with custom features and modern technology that you have to see, feel, and hear for yourself.\nThe vintage appointments include a solid Sitka spruce VINTAGE TONE SYSTEM® (VTS) top, a dovetail neck joint, and natural protein glue construction that give it the rich, fully aged Martin tone that has inspired generations. The look is unlike anything in our production line to date with European flamed maple binding, stylish gold frets, gold open-gear tuners, and a unique 1930s style script logo inlaid in pearl on the headstock.\n Some ultra-modern features include Liquidmetal® bridge pins with red dots and a composite carbon fiber bridgeplate that boosts volume. And we’ve included a new neck shape that is slightly asymmetrical for maximum hand comfort up and down the fretboard. This guitar is anything but standard.  Included with this beautiful guitar is a deluxe hardshell case.",
    specifications: "Top Material: Sitka Spruce with VTS"
}

// Dynamically load all data
window.onload = function() {
    loadProductNames();
    loadProductPrice();
    loadDescription();
    loadProductImages();
    loadSpecs();
};


function loadProductNames() {
    var productNames = document.getElementsByClassName('product-name');
    for (const name of productNames) {
        name.innerHTML = product.name;
    }
}

function loadProductPrice(){
    var productPrice = document.getElementsByClassName('product-price');
    for (const price of productPrice) {
        price.innerHTML = dollarUS.format(product.price);
    }
}

function loadProductImages() {
    var mainImage = document.getElementById('main-product-img')
    if (mainImage) {
        mainImage.src = product.image;
    }
    var listingImage = document.getElementsByClassName('listing-img');
    for (const image of listingImage) {
        image.src = product.image;
    }
    var cartImage = document.getElementsByClassName('item-img');
    for (const image of cartImage) {
        image.src = product.image;
    }
}

function loadDescription() {
    var productDescription = document.getElementById('product-description');
    if (productDescription) {
        productDescription.innerHTML = product.description;
    }
}

function loadSpecs() {
    var productSpecs = document.getElementById('product-specs');
    if (productSpecs) {
        productSpecs.innerHTML = product.specifications;
    }
}


// updateQuantity() {
//     //
// }

function addItem() {
    // Display confirmation
    let confirmation = document.getElementById('added-confirmation');
    confirmation.style.display = "block";

    // Remove the alert after 5 seconds
    setTimeout(() => {
        confirmation.style.display = 'none';
    }, 5000);
}

export { loadProductNames, loadProductPrice, loadDescription, loadProductImages, loadSpecs}
