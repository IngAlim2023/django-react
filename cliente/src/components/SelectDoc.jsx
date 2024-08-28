import { useEffect, useState } from "react";
import { getALlDocs } from "../api/tipodoc.api";
import Select from 'react-select';
import { Controller } from 'react-hook-form';

export function SelectDoc({ control }) {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    async function loadDocs() {
      const res = await getALlDocs();
      setDocs(res.data);
    }
    loadDocs();
  }, []);

  const options = docs.map((opc) => ({
    //Arregle los valores del index por la base de datos no tomaba el primer valor igual a cero
    value: opc.id,
    label: opc.tipo_documento
  }));

  return (
    <Controller
      name="tipo_id"
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <Select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...field}
          options={options}
          placeholder="Seleccione tipo documento"
          onChange={(selectedOption) => field.onChange(selectedOption ? selectedOption.value : null)}
          value={options.find(option => option.value === field.value) || null}
          
        />
      )}
    />
  );
}
