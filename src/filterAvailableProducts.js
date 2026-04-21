const products = require('./data');

function filterAvailableProducts(products, minPrice, category) {
    return [...products]
        .filter(product => product.available === true && product.price >= minPrice && product.category === category)
        .sort((a, b) => a.name.localeCompare(b.name));
}

console.log(filterAvailableProducts(products, 10000, 'home'));

module.exports = {
    filterAvailableProducts: filterAvailableProducts
}