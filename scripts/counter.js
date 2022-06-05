// Functions for item quantity counter

function increment(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10); 
    // Change the input value
    value = isNaN(value)? 0 : value;
    value++;
    input.value = value;
}

function decrement(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10); 
    if (value > 1) {
        // Change the input value
        value = isNaN(value)? 0 : value;
        value--;
        input.value = value;
    }
}
