const { filterAvailableProducts } = require('../src/filterAvailableProducts');

const products = require('../src/data');

describe('filterAvailableProducts', () => {
    test('original input is not modified', () => {
        const original = [...products];
        filterAvailableProducts(products, 10000, 'home');
        
        expect(products).toEqual(original);
    });

    test('filterAvailableProducts should return only available products with price >= 10000 and category "home", sorted by name', () => {
        const result = filterAvailableProducts(products, 10000, 'home');
        expect(result).toEqual([
            { name: 'Szék', price: 45000, category: 'home', available: true }
        ]);
    });

    test('filterAvailableProducts should return an empty array if products is empty', () => {
        const result = filterAvailableProducts([]);
        expect(result).toEqual([]);
    });

    test('filterAvailableProducts should return an empty array if no products match the criteria', () => {
        const result = filterAvailableProducts(products, 500000, 'tech');
        expect(result).toEqual([]);
    });
});