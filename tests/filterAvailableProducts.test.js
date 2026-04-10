const { filterAvailableProducts } = require('../src/filterAvailableProducts');

const products = require('../src/data');

describe('filterAvailableProducts', () => {
    test('original input is not modified', () => {
        const original = [...products];
        filterAvailableProducts(products);
        
        expect(products).toEqual(original);
    })
});

test('filterAvailableProducts should return only available products with price >= 10000 and category "home", sorted by name', () => {
    const result = filterAvailableProducts(products);
    expect(result).toEqual([
        { name: 'Szék', price: 45000, category: 'home', available: true }
    ]);
});