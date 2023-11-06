import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
//import { createEmpresa } from "../../../redux/actions";
import primeraMayuscula from "../../../functions/primeraMayuscula";
import Swal from 'sweetalert2';
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
    
      const mostrarAlertaExitosa=() => {
        Swal.fire({
          icon: 'success',
          title: 'Crear medio de pago',
          text: 'El medio de pago se guardó de manera exitosa'
        })
      }

      const mostrarAlertaError=() => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Debe llenar el campo sin errores'
        })
      }
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
            mostrarAlertaExitosa()
            setInput({name:'', type_of_person: '', email:'', phone: ''})
            setErrors({name:'', type_of_person: '', email:'', phone: ''})
          
          }else {
            //setErrorSubmit("Debe llenar el campo sin errores");
            mostrarAlertaError();
           
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