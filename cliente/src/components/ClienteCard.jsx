export function ClienteCard({cliente}) {
  return (
    <div>
      <h1>{cliente.nombre}</h1>
      <h1>{cliente.Apellido}</h1>
      <h1>{cliente.email}</h1>
      <h1>{cliente.phone}</h1>
      <hr/>
    </div>
  );
}
