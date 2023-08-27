import { useEffect, useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import ListadoPacientes from './components/ListadoPacientes'


function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState([])

  useEffect(() => {   //se ejecuta primero, cuando el componente está listo
    console.log(JSON.parse(localStorage.getItem('pacientes')))
    setPacientes(JSON.parse(localStorage.getItem('pacientes')) ?? [])   // para la primer carga del app, si el localstorage esta vacio, le asigno un [] vacio a pacientes
  }, [])
  

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])
  

  const eliminarPaciente = (id) =>{
    const pacientesUpdated= pacientes.filter( p => p.id !== id)
    setPacientes(pacientesUpdated)
  }

  return (
    <>
      <div className="container mx-auto"> {/* fragment */}
        <Header />
        <div className='md:flex-row md:flex'>
          <Form
          pacientes={pacientes}             //le paso al hijo Form la variable de pacientes y setPacientes
          setPacientes={setPacientes}
          paciente= {paciente}
          setPaciente={setPaciente} />  
          <ListadoPacientes 
          pacientes= {pacientes}
          setPaciente= {setPaciente}
          eliminar= {eliminarPaciente}
          />
        </div>
      </div>
    </>
  )
}

export default App
