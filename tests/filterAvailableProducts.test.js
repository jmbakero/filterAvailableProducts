const { filterAvailableProducts } = require('../src/filterAvailableProducts');

const products = require('../src/data');

describe('filterAvailableProducts', () => {
    test('original input is not modified', () => {
        const original = [...products];
        filterAvailableProducts(products);
        
        expect(products).toEqual(original);
    })
});