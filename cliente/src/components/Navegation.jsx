import { Link } from "react-router-dom";
export function Navegation() {
  return (
    <div>
      <Link to="/cliente">
        <h1>Cliente App</h1>
      </Link>

      <Link to="/cliente-create">Crear cliente</Link>
    </div>
  );
}
