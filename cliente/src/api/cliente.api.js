import axios from 'axios';

export const getALlCliente = () =>{
    return axios.get("http://localhost:8000/cliente/api/v1/cliente/")
}