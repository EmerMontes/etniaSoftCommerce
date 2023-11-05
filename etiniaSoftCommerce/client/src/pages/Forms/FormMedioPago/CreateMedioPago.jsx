import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
//import { createEmpresa } from "../../../redux/actions";
import primeraMayuscula from "../../../functions/primeraMayuscula";
import validate from "./validate"
import './formMedioPago.css'


   
const CreateMedioPago = () => {
    
    const dispatch = useDispatch();
    
    const [errorSubmit,setErrorSubmit] = useState("");
    
    const [input, setInput] = useState({
        name: '',
       
    })
    
    const [errors, setErrors] = useState({
        name: '',
        
    })
    
      useEffect(() => {
       // dispatch(getAllTeams())
      }, [dispatch])
    
      const handleChange = (evento) => {
        setInput({
          ...input,
          [evento.target.name]: evento.target.value
        })
        setErrors(
          validate({
            ...input,
            [evento.target.name]: evento.target.value
          })
        )
        setErrorSubmit("");
      }
    
      const handleSubmit = async (evento) => {
        evento.preventDefault();
        try {
          
          let long = Object.values(errors);
          if (long.length === 0) {
            input.name = primeraMayuscula(input.name);
            console.log(input)
         // await dispatch(createEmpresa(input))
            setErrorSubmit(`El medio de pago ha sido creado`)
            setInput({name:'', type_of_person: '', email:'', phone: ''})
            setErrors({name:'', type_of_person: '', email:'', phone: ''})
          
          }else {
            setErrorSubmit("Debe llenar el campo sin errores");
           
          }
        }catch (error) {
          setErrorSubmit(error)

        }
        
      }
    
      
      return <div>
      <form className="form" onSubmit={handleSubmit} name ='form'>
      <h3 className="Title"> + Medio de Pago</h3>
        

        <div>
        <label htmlFor="name">Nombre del medio de pago:</label>
        <input type="text" name ="name" id="name" value={input.name} onChange ={handleChange}
        className = {errors.name && 'warning'}></input>
        {errors.name && <p className ='danger'>{errors.name}</p>}
        </div>

       
        <span>{errorSubmit}</span>
       
        
        <button id="submit">Crear Medio</button>
         
      </form>
      </div>
    }


export default CreateMedioPago