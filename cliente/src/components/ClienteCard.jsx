import { useNavigate } from "react-router-dom";

export function ClienteCard({cliente}) {

  const navigate = useNavigate();
  return (
    <div
    onClick={()=>{
      navigate(`/cliente/${cliente.id}`)
    }}
    >
      <hr />
      <h1>Nombre: {cliente.nombre}</h1>
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
