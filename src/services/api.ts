import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://teste.ignisdigital.tec.br/'
});