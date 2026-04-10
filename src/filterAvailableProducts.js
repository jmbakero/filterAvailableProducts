const products = require('./data');

const minPrice = 10000;
const category = 'home';

function filterAvailableProducts(products) {
    return [...products]
        .filter(product => product.available === true)
        .filter(product => product.price >= minPrice)
        .filter(product => product.category === category)
        .sort((a, b) => a.name.localeCompare(b.name));
}

console.log(filterAvailableProducts(products));

module.exports = {
    filterAvailableProducts: filterAvailableProducts
}