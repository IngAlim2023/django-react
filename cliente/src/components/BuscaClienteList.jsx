

export function BuscaClienteList(props) {
  return (
    <div className="w-full max-w-sm mt-4 mb-4">
        <div className="flex items-center border-b border-teal-500 py-2">
            <input type="text" 
                placeholder="Realiza busqueda" 
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                value={props.buscar}
                onChange={(e)=>{
                    props.setBuscar(e.target.value);
                }}    
            />
        </div>
    </div>
  )
}
