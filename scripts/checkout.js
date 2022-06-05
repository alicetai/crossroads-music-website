window.onload = function() {
    showStep(currentStep); // Display the first form step
    showCartBadge(totalCartQuantity);
    showPriceRow(document.getElementById("cart-total-row"));
};

function showPriceRow(row) {
    row.style.display = "flex";
}