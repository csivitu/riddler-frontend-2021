import axios from 'axios';

export const API = axios.create({
    // baseURL: process.env.REACT_APP_BASE_URL,
    baseURL: 'https://api-riddler.csivit.com',
    responseType: 'json',
});

export const setAuthToken = (token) => {
    API.defaults.headers.common.Authorization = token;
};

export const baseURL = 'https://api-riddler.csivit.com';

export default API;