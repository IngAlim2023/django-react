import { Link } from "react-router-dom";
export function Navegation() {
  return (
    <div className="flex justify-between py-3">
      <Link to="/cliente">
        <h1 className="font-bold text-3x1 mb-4">Cliente App</h1>
      </Link>
      <Link to="/login">
        <button className="bg-green-500 px-3 py-2 rounded-lg">Login</button>
      </Link>
      <button className="bg-indigo-500 px-3 py-2 rounded-lg">
      <Link to="/cliente-create">Crear cliente</Link>
      </button>
      
    </div>
  );
}
