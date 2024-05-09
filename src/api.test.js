import fetch from 'cross-fetch';
import { fetchData } from './api';

jest.mock('cross-fetch');

const API_URL = 'https://example.com/api';

describe('fetchData', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    beforeEach(() => {
        jest.spyOn(console, 'error').mockImplementation(() => { });
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should return data when the fetch is successful', async () => {
        const mockData = { data: 'Mocked data' };
        const mockResponse = {
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockData),
        };
        fetch.mockResolvedValueOnce(mockResponse);

        const result = await fetchData(API_URL);

        expect(fetch).toHaveBeenCalledWith(API_URL);
        expect(result).toEqual(mockData);
    });

    it('should throw an error when the fetch fails', async () => {
        const mockResponse = {
            ok: false,
            json: jest.fn().mockRejectedValue(new Error('Failed to fetch data')),
        };
        fetch.mockResolvedValueOnce(mockResponse);


        await expect(fetchData(API_URL)).rejects.toThrow('Failed to fetch data');
        expect(fetch).toHaveBeenCalledWith(API_URL);
    });

    it('should handle network errors', async () => {
        const mockError = new Error('Network error');
        fetch.mockRejectedValueOnce(mockError);

        await expect(fetchData(API_URL)).rejects.toThrow('Network error');
        expect(fetch).toHaveBeenCalledWith(API_URL);
    });
});