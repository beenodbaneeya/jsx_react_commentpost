import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID vwB0Hj_MjiEkMZ9X7VstWu1B4ohCyIIhOK3vIK52tn4'
    }
});