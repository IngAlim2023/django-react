import axios from 'axios';

export const getALlDocs = () =>{
    return axios.get("http://localhost:8000/cliente/api/v1/tipodoc/")
}