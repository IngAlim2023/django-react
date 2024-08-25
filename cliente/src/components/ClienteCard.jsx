import { useNavigate } from "react-router-dom";

export function ClienteCard({cliente}) {

  const navigate = useNavigate();
  return (
    <div
    onClick={()=>{
      navigate(`/cliente/${cliente.id}`)
    }}
    >
      <h1>{cliente.nombre}</h1>
      <h1>{cliente.Apellido}</h1>
      <h1>{cliente.email}</h1>
      <h1>{cliente.phone}</h1>
      <hr/>
    </div>
  );
}
