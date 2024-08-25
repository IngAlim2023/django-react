import { SelectDoc } from "../components/SelectDoc";
import { useForm } from "react-hook-form";
import { createCliente } from "../api/cliente.api";
import {toast} from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function ClienteFormPage() {
  const { register, handleSubmit, control } = useForm(); // Añadir 'control'
  
  // Navegar entre paginas
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const res = await createCliente(data);
    toast.success("Cliente creado");
    navigate("/cliente")  
  });

  return (
    <div style={{width:"30%"}}>
      <form className="form-cliente" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          {...register("nombre", { required: true })}
        />
        <input
          type="text"
          placeholder="Apellido"
          {...register("Apellido", { required: true })}
        />
        <input
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
        />
        <input
          type="number"
          placeholder="Número de identificación"
          {...register("identification", { required: true })}
        />
        <input
          type="text"
          placeholder="Dirección"
          {...register("address", { required: true })}
        />
        <input
          type="number"
          placeholder="Número de telefono"
          {...register("phone", { required: true })}
        />
        <input
          type="date"
          {...register("birthday", { required: true })}
        />
        <SelectDoc control={control} /> {/* Pasar 'control' */}
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
