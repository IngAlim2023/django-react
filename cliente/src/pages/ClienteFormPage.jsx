import { SelectDoc } from "../components/SelectDoc";
import { useForm } from "react-hook-form";
import { createCliente, deleteCliente } from "../api/cliente.api";
import {toast} from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export function ClienteFormPage() {
  const { register, handleSubmit, control } = useForm(); // Añadir 'control'
  
  // Navegar entre paginas
  const navigate = useNavigate();
  // Atrapar los parametros de la url
  const params = useParams();

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
      {params.id && <button
        onClick={async ()=>{
          const aceptar = window.confirm(`Estas segur@ de eliminar al cliente ${params.id}`);
          if (aceptar){
            await deleteCliente(params.id);
            navigate("/cliente");
            toast.success(`Se ha eliminado el cliente ${params.id}`);
          }else{
            navigate("/cliente");
            toast.success(`No se elimino ${params.id}`);
          }
        }}
      >Eliminar</button>}
    </div>
  );
}
