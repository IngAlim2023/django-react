import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { getALlCliente } from "../api/cliente.api";

export function ClienteDaTa() {
  const [clientes, setCliente] = useState([]);

  useEffect(() => {
    async function loadCliente() {
      const res = await getALlCliente();
      setCliente(res.data);
    }
    loadCliente();
  }, []);
  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
      className: "text-left text-gray-700",
    },
    {
      name: "Apellido",
      selector: (row) => row.apellido,
      className: "text-left text-gray-700",
    },
    {
      name: "Correo",
      selector: (row) => row.correo,
      className: "text-left text-gray-700",
    },
    ,
    {
      name: "Creado",
      selector: (row) => row.creado,
      className: "text-left text-gray-700",
    },
    ,
    {
      name: "Modificado",
      selector: (row) => row.modificado,
      className: "text-left text-gray-700",
    },
  ];
  //Solucion para la renderización de la tabla:
  //En records y busqueda traigo los datos de la API que necesito,  
  const [records, setRecords] = useState([]);
  const [busqueda, setBusqueda] = useState([]);

  useEffect(()=>{
    const clienteData = async () => {
      const datosDaTa = clientes.map((cliente) => ({
        nombre: cliente.nombre,
        apellido: cliente.Apellido,
        correo: cliente.email,
        creado: cliente.created,
        modificado: cliente.modified
      }));
      setRecords(datosDaTa)
      setBusqueda(datosDaTa);
    };
    
    clienteData();
  }, [clientes])
  //Filtro los datos con el input en caso de que el input vuelva a vacio seteo los records con la 
  //busqueda (Nota: debe ser al reves Lol, pero funciona) 
  const filter = (e) =>{
    if (e.target.value === ''){
      setRecords(busqueda);
    } else {
      const datafilter = records.filter(record =>{
        return record.nombre.toLowerCase().includes(e.target.value.toLowerCase())
      })
      setRecords(datafilter);
    }
  }


  return (
    <div className="container mx-auto my-5 p-4 shadow-lg rounded-lg bg-white">
      <div className="flex rounded-lg shadow-sm">
        <span className="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400"> Busqueda: </span>
        <input 
        type="text" 
        onChange={filter}
        placeholder=" por nombre"
        className="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
        />
      </div>
      
      <DataTable
        title = "Usuarios"
        data={records}
        className="display"
        columns={columns}
        pagination
        fixedHeader
        customStyles={{
            headRow: {
                style: {
                    backgroundColor: '#f8fafc',
                },
            },
            rows: {
                style: {
                    minHeight: '48px', // override the row height
                },
            },
            headCells: {
                style: {
                    paddingLeft: '16px', // override the cell padding for head cells
                    paddingRight: '16px',
                    fontWeight: '700', // make header font bold
                },
            },
            cells: {
                style: {
                    paddingLeft: '16px', // override the cell padding for data cells
                    paddingRight: '16px',
                },
            },
        }}
      ></DataTable>
    </div>
  );
}
