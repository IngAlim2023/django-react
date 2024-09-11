import { useEffect, useState } from "react";
import { getALlCliente } from "../api/cliente.api";
import {ClienteCard} from './ClienteCard';
import { BuscaClienteList } from "./BuscaClienteList";

export function ClienteList() {
    const [clientes, setCliente] = useState([]);
    useEffect(()=>{
        async function loadCliente(){
           const res = await getALlCliente()
           setCliente(res.data);
        }
        loadCliente();
    }, []);
    // Creamos un hook useState para conseguir los valor del input para buscar:
    const [buscar, setBuscar] = useState('');

    //Con el valor de buscar creamos un nuevo array: -records- filtrando por el valor de buscar
    const records = clientes.filter((record)=>
      record.nombre.toLowerCase().includes(buscar.toLowerCase())
    )
    //Con este array creado se lo enviamos al card para que haga el listado filtrado

  return (
    <>
    {/*EL hook que creamos para buscar se lo enviamos como propiedad a el buscador*/}
    <BuscaClienteList buscar={buscar} setBuscar={setBuscar}/>
    <div className="grid grid-cols-3 gap-3">
      
      {records.map(cliente =>(
        <ClienteCard key={cliente.id} cliente={cliente}/>
      ))}
    </div>
    </>
    
    )
  
}
