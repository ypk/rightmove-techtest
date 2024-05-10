import { buildAPIUrl } from '../buildAPIUrl';

describe('buildAPIUrl', () => {
    it('returns the correct URL with query string when params are provided', () => {
        const params = {
            minPrice: 100000,
            maxPrice: 200000,
            propertyTypes: ['apartment', 'house'],
        };
        const expectedUrl = 'https://example.com/api/properties?minPrice=100000&maxPrice=200000&propertyTypes=apartment,house';
        expect(buildAPIUrl(params)).toBe(expectedUrl);
    });

    it('returns the correct URL without query string when no params are provided', () => {
        const expectedUrl = 'https://example.com/api/properties';
        expect(buildAPIUrl()).toBe(expectedUrl);
    });
});