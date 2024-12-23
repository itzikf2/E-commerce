import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/user',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const login = async (email: string, password: string) => {
    try {
        const response = await api.post('/login', { email, password});
        return response.data;
    } catch (error: any) {
        console.error('Error al iniciar sesión:', error.response?.data || error.message);
        throw error;
    }
};

export const register = async (email: string, password: string) => {
  try {
    const response = await api.post('/register', { email, password });
    return response.data;
  } catch (error: any) {
    console.error('Error al crear el usuario:', error.response?.data || error.message);
    throw error;
  }
};