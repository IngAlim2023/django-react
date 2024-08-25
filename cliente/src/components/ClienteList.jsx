import { useEffect, useState } from "react";
import { getALlCliente } from "../api/cliente.api";
import {ClienteCard} from './ClienteCard';

export function ClienteList() {
    const [clientes, setCliente] = useState([]);
    useEffect(()=>{
        async function loadCliente(){
           const res = await getALlCliente()
           setCliente(res.data);
        }
        loadCliente();
    }, []);
  return <div>
      {clientes.map(cliente =>(
        <ClienteCard key={cliente.id} cliente={cliente}/>
      ))}
    </div>
  
}
