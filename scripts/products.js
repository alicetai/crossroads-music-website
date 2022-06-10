import {loadProductNames, loadProductPrice, loadProductImages} from './product.js';

window.onload = function() {
    loadProductNames();
    loadProductPrice();
    loadProductImages();
    showCartBadge(1);
};
