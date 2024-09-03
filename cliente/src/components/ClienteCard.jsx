import { useNavigate } from "react-router-dom";

export function ClienteCard({cliente}) {

  const navigate = useNavigate();
  return (
    <div
    className="bg-cyan-400 p-3 hover:bg-cyan-700 hover:cursor-pointer"
    onClick={()=>{
      navigate(`/cliente/${cliente.id}`)
    }}
    >
      <hr />
      <h1 className="font-bold uppercase">Nombre: {cliente.nombre}</h1>
      <h1>Apellido: {cliente.Apellido}</h1>
      <p>Correo: {cliente.email}</p>
      <p>Telefono: {cliente.phone}</p>
      <p>No de identidad: {cliente.identification}</p>
      <p>Dirección: {cliente.address}</p>
      <p>Telefono: {cliente.phone}</p>
      <p>Fecha de nacimiento: {cliente.birthday}</p>
      <hr/>
    </div>
  );
}
