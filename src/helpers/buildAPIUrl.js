import { convertParamsToQueryString } from "./index";

export const buildAPIUrl = (params = {}) => {
    const queryString = convertParamsToQueryString(params);
    const baseUrl = `${import.meta.env.VITE_API_URL}/properties`;
    return `${baseUrl}?${queryString}`;
};