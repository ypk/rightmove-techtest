export const convertParamsToQueryString = (params) => {
    if (params === null || params === undefined) {
        return '';
    }

    return Object.entries(params)
        .map(([key, value]) => {
            if (Array.isArray(value)) {
                return value.length > 0 ? `${key}=${value.join(',')}` : '';
            } else {
                return value !== '' && value !== null && value !== undefined ? `${key}=${value}` : '';
            }
        })
        .filter(Boolean)
        .join('&');
};