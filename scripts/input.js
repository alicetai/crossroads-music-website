// Change the appearance of input fields when focused

let inputElements = document.getElementsByClassName("text-input bottom-border-light");

for (var element of inputElements) {

    let inputField = element.getElementsByTagName("input")[0];

    inputField.addEventListener("focusin", function() {
        // Remove light border and replace with tan
        inputField.parentElement.classList.replace("bottom-border-light", "bottom-border-tan");
    });
    inputField.addEventListener("focusout", function() {
        // Remove tan border and replace with light
        inputField.parentElement.classList.replace("bottom-border-tan", "bottom-border-light");
    });
};
