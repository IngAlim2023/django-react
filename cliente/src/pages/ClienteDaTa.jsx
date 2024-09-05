import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { getALlCliente } from "../api/cliente.api";

export function ClienteDaTa() {
  const [clientes, setCliente] = useState([]);

  useEffect(() => {
    async function loadCliente() {
      const res = await getALlCliente();
      setCliente(res.data);
      console.log(res.data);
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
  const datosDaTa = [];
  const clienteData = () => {
    clientes.forEach((cliente) => {
      const datoData = {
        nombre: cliente.nombre,
        apellido: cliente.Apellido,
        correo: cliente.email,
        creado: cliente.created,
        modificado: cliente.modified
      };
      datosDaTa.push(datoData);
    });
  };
  clienteData();

  const buscar = () =>{
    
  }

  return (
    <div className="container mx-auto my-5 p-4 shadow-lg rounded-lg bg-white">
      <input type="text" onChange={buscar()} />
      <DataTable
        data={datosDaTa}
        className="display"
        columns={columns}
        pagination
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
