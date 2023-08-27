const Paciente = ({paciente, setPaciente, eliminar}) => {

  const {nombre, email, id} = paciente
  
  const handleEliminar = () =>{
    const rta= confirm('Está seguro que desea eliminarlo?')

    if (rta){
      eliminar(id)
    }
  }

  return (
    <div className="border-2 border-gray my-3 p-2 shadow-gray-50">
        <h3>{paciente.nombre}</h3>
        <p>{email}</p>
        <p>key: {id}</p>

        <div className="flex flex-row justify-evenly my-3">
          <button type="button" className="bg-green-300 p-2 rounded" onClick={()=>{setPaciente(paciente)}}>   {/* se escribe como array function porque al pasar un parametro
          y poner parentesis, si no se escribe asi entonces se ejecutaria automaticamente */}
            Editar
          </button>
          <button type="button" className="bg-red-300 p-2 rounded" onClick={handleEliminar}>
            Eliminar
          </button>
        </div>
        
    </div>
  )
}

export default Paciente