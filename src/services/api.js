import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000',
    // baseURL: 'https://api-crj.eduardodavila.es',
    withCredentials: true,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

export default api;