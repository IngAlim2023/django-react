import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ClientePage } from "./pages/ClientePage";
import { ClienteFormPage } from "./pages/ClienteFormPage";
import { Navegation } from "./components/Navegation";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Navegation />
      <Routes>
        <Route path="/" element={<Navigate to="/cliente" />} />
        <Route path="/cliente" element={<ClientePage />} />
        <Route path="/cliente-create" element={<ClienteFormPage />} />
      </Routes>
      <Toaster/>
    </BrowserRouter>
  );
}
export default App;
