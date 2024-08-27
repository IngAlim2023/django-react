import { SelectDoc } from "../components/SelectDoc";
import { useForm } from "react-hook-form";
import {
  createCliente,
  deleteCliente,
  updateCliente,
  getCliente,
} from "../api/cliente.api";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

//Datos del cliente:
import { useEffect } from "react";

export function ClienteFormPage() {
  const { register, handleSubmit, control, setValue } = useForm(); // Añadir 'control'

  // Navegar entre paginas
  const navigate = useNavigate();
  // Atrapar los parametros de la url
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      try {
        await updateCliente(params.id, data);
        toast.success("Cliente Actualizado");
        navigate("/cliente");
      } catch (error) {
        console.error("Error en la solicitud:", error.response.data);
      }
    } else {
      try {
        await createCliente(data);
        toast.success("Cliente creado");
        navigate("/cliente");
      } catch (error) {
        console.error("Error en la solicitud:", error.response.data);
      }
    }
  });
  //Obtencion de los datos del cliente:
  useEffect(() => {
    async function loadCliente() {
      if (params.id) {
        const res = await getCliente(params.id);
        setValue("nombre", res.data.nombre);
        setValue("Apellido", res.data.Apellido);
        setValue("email", res.data.email);
        setValue("identification", res.data.identification);
        setValue("address", res.data.address);
        setValue("phone", res.data.phone);
        setValue("birthday", res.data.birthday);
      }
    }
    loadCliente();
  }, []);

  return (
    <div
      style={{
        width: "30%",
        backgroundColor: "white",
        padding: "12px",
        borderRadius: "20px",
      }}
    >
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
        {params.id && <label style={{ color: "red" }}>Falta este campo</label>}
        <SelectDoc control={control} /> {/* Pasar 'control' */}
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
          type="text"
          placeholder="Número de telefono"
          {...register("phone", { required: true })}
        />
        <input type="date" {...register("birthday", { required: true })} />
        <button type="submit">Guardar</button>
      </form>
      {params.id && (
        <button
          onClick={async () => {
            const aceptar = window.confirm(
              `Estas segur@ de eliminar al cliente ${params.id}`
            );
            if (aceptar) {
              await deleteCliente(params.id);
              navigate("/cliente");
              toast.success(`Se ha eliminado el cliente ${params.id}`);
            } else {
              navigate("/cliente");
              toast.success(`No se elimino el cliente`);
            }
          }}
        >
          Eliminar
        </button>
      )}
    </div>
  );
}
