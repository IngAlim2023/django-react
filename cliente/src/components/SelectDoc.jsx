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

  const options = docs.map((opc, index) => ({
    value: index,
    label: opc.tipo_documento
  }));

  return (
    <Controller
      name="tipo_id"
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <Select
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
