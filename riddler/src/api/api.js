import axios from 'axios';

export const API = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    responseType: 'json',
});

export const setAuthToken = (token) => {
    API.defaults.headers.common.Authorization = token;
};

export const getLeaderboard = async () =>{
    let res = await API.get(`/score`);
    return res.data;


}
export default API;