import axios from 'axios';

const clienteApi = axios.create({
    baseURL:"http://localhost:8000/cliente/api/v1/cliente/",
})

export const getALlCliente = () => clienteApi.get("/");
export const createCliente = (cliente) => clienteApi.post("/", cliente);