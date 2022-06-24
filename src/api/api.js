import axios from 'axios';
const { process } = require('../env.json');

export const API = axios.create({
	// baseURL: process.env.REACT_APP_BASE_URL,
	baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
	responseType: 'json',
});

export const setAuthToken = (token) => {
	API.defaults.headers.common.Authorization = token;
};

export const baseURL = process.env.REACT_APP_BACKEND_BASE_URL;

export default API;
