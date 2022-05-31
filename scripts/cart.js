// Cart functions

// function alertShow() {
//     document.getElementById("added-confirmation").style.display = "block";
// }

// function alertHide() {
//     document.getElementById("added-confirmation").style.display = "none";
// }

const cartAdd = document.getElementById('add-to-cart-btn');

cartAdd.addEventListener('click', () => {
    const confirmation = document.getElementById('added-confirmation');
    confirmation.style.display = 'block';

    // Remove the alert after 5 seconds
    setTimeout(() => {
        confirmation.style.display = 'none';
    }, 5000);
});
