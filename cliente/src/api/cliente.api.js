import axios from 'axios';


const clienteApi = axios.create({
    baseURL:"http://localhost:8000/cliente/api/v1/cliente/",
})

export const getALlCliente = () => clienteApi.get("/");
export const createCliente = (cliente) => clienteApi.post("/", cliente);
export const deleteCliente = (id) => clienteApi.delete(`/${id}`);
export const updateCliente = (id, cliente) => clienteApi.put(`/${id}/`, cliente);

//Opcion para tener la información de un cliente (update):

export const getCliente = (id) => clienteApi.get(`/${id}`);