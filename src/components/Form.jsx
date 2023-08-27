import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react"


const Formulario = ({pacientes,setPacientes, paciente, setPaciente}) => {
    const [nombre, setNombre] = useState("")    /* [variable, funcion para modificar la variable] = valor inicial entre () */
    const [email, setEmail] = useState("") 
    
    useEffect(() => {
        if (Object.keys(paciente).length>0)
        {   
            setNombre(paciente.nombre)
            setEmail(paciente.email)
        }
    }, [paciente])
    

    const handleSubmit = (e) => {
        e.preventDefault()

        if ([nombre,email].includes('')){
            console.log('todos los campos son obligatorios')
            return
        }

        const key= uuidv4()

        //object Pacientes
        const objectoPacientes={
            nombre,
            email
        }

        if (paciente.id){
            //actualizo paciente
            objectoPacientes.id= paciente.id       //al object paciente con los datos actualizados le asigno el id del paciente a actualizar
            const pacientesUpdated = pacientes.map(p => (p.id===paciente.id ? objectoPacientes : p))      //recorro pacientes y reemplazo el paciente correspondiente
            setPacientes(pacientesUpdated)
            setPaciente({})
        }else{
            //nuevo
            objectoPacientes.id= key
            setPacientes([...pacientes,objectoPacientes])   //le envio al App el arreglo de Pacientes actualizado con el nuevo paciente
        }
        


        //reinicio los values del form despues del submit
        setNombre('')
        setEmail('')
    }

    return(

        <div className="md:w-1/2 md:mx-2">
            <h2 className="font-black text-center mb-2">
                Formulario
            </h2>
            <form className="shadow-md bg-white px-4" action="" onSubmit={handleSubmit}>
                <input placeholder="Nombre" className="border-2 border-solid border-black w-full my-3 p-2" type="text" value={nombre} 
                onChange={(e) => {setNombre(e.target.value)}}/>     {/* actualizo el value del input a medida que escribo */}

                <input type="email"  placeholder="email" className="border-2 border-solid border-black w-full my-3 p-2" value={email} 
                onChange={(e) => {setEmail(e.target.value)}}/>

                <input type="submit" className="border-2 my-2" value={paciente.id?"Guardar":"Crear"}/>
            </form>
        </div>
    )
}

export default Formulario