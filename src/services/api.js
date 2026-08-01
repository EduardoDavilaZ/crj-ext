import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-crj.eduardodavila.es/',
    withCredentials: true,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

export default api;