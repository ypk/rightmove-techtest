import { convertParamsToQueryString } from '../convertParamsToQueryString';

describe('convertParamsToQueryString', () => {
    it('returns an empty string when params are null or undefined', () => {
        expect(convertParamsToQueryString(null)).toBe('');
        expect(convertParamsToQueryString(undefined)).toBe('');
    });

    it('returns the correct query string for valid params', () => {
        const params = {
            minPrice: 100000,
            maxPrice: 200000,
            propertyTypes: ['apartment', 'house'],
        };
        const expectedQueryString = 'minPrice=100000&maxPrice=200000&propertyTypes=apartment,house';
        expect(convertParamsToQueryString(params)).toBe(expectedQueryString);
    });

    it('ignores empty values in params', () => {
        const params = {
            minPrice: 100000,
            maxPrice: '',
            propertyTypes: [],
            sortBy: undefined,
        };
        const expectedQueryString = 'minPrice=100000';
        expect(convertParamsToQueryString(params)).toBe(expectedQueryString);
    });
});
