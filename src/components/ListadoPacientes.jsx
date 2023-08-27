import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes,setPaciente, eliminar }) => {

  return (
    <div className="md:w-1/2 md:mx-2">  
      <h2 className="text-center font-bold mb-2">
        ListadoPacientes
      </h2>

      {
        pacientes && pacientes.length ? (
        <>
          {
            pacientes.map((p) =>    //se omiten las llaves ya que es solo el return
            (
              <Paciente
                key={p.id}
                paciente={p}  //le paso el paciente actual al componentente Paciente
                setPaciente={setPaciente}
                eliminar= {eliminar}
              />
            )
            )
          }
        </>
      ) : (
        <p>No hay pacientes registrados</p>
      )}


    </div>
  )
}

export default ListadoPacientes