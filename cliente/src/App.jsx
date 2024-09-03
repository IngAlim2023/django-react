import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ClientePage } from "./pages/ClientePage";
import { ClienteFormPage } from "./pages/ClienteFormPage";
import { Navegation } from "./components/Navegation";
import { Toaster } from "react-hot-toast";
import { Login } from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navegation />
        <Routes>
          <Route path="/" element={<Navigate to="/cliente" />} />
          <Route path="/cliente" element={<ClientePage />} />
          <Route path="/cliente-create" element={<ClienteFormPage />} />
          <Route path="/cliente/:id" element={<ClienteFormPage />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        <Toaster position="bottom-right" reverseOrder={true} />
      </div>
    </BrowserRouter>
  );
}
export default App;
