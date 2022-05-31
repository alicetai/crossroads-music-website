const brands = [
    { src: 'images/brand-logos/martin-guitars-logo.png', title: 'Martin Guitars', alt: 'Martin Guitars logo', url: "https://www.martinguitar.com"},
    { src: 'images/brand-logos/kamaka-logo.png', title: 'Kamaka Ukelele', alt: 'Kamaka Ukelele logo' },
    { src: 'images/brand-logos/weber-logo.png', title: 'Weber Mandolins', alt: 'Weber Mandolins logo' },
    { src: 'images/brand-logos/national-reso-phonic-logo.png', title: 'National Reso-Phonic Guitars', alt: 'National Reso-Phonic Guitars logo' },
    { src: 'images/brand-logos/kala-logo.png', title: 'Kala Ukelele', alt: 'Kala Ukelele logo' },
];

window.onload = function() {
    loadBrands();
};

function loadBrands() {
    var brandImages = document.getElementsByClassName('brand-img');
    for (let i=0; i < brandImages.length; i++) {
        brandImages[i].src = brands[i].src;
        brandImages[i].alt = brands[i].alt;
    }

    // var mainImage = document.getElementsByClassName('brand-img')
    // for (const image of mainImage) {
    //     image.src = brands[0].src;
    //     image.innerHTML = brands[0].src;
}