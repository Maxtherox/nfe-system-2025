import axios from "axios";

export const api = axios.create({
  baseURL: 'https://backend-nfe-plataform-system.onrender.com',
  withCredentials: true
});