import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
//import { createEmpresa } from "../../../redux/actions";
import validate from "./validate"
import './formCreateEmpresa.css'


   
const CreateEmpresa = () => {
    
    const dispatch = useDispatch();
    
    const [errorSubmit,setErrorSubmit] = useState("");
    
    const [input, setInput] = useState({
        name: '',
        type_of_person: '',
        email: '',
        phone: ''
        
    })
    
    const [errors, setErrors] = useState({
        name: '',
        type_of_person: '',
        email: '',
        phone: ''
       
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
         // await dispatch(createEmpresa(input))
          setErrorSubmit(`La Empresa ha sido creada`)
          setInput({name:'', type_of_person: '', email:'', phone: ''})
          setErrors({name:'', type_of_person: '', email:'', phone: ''})
          
          }else {
            setErrorSubmit("Debe llenar todos los campos sin errores");
           
          }
        }catch (error) {
          setErrorSubmit(error)

        }
        
      }
    
      // const habilitar = () => {
      //   let deshabilitar = false;

      //   if (input.name == "") deshabilitar = true;
      //   if (input.type_of_person= "") deshabilitar = true;
      //   if (input.email == "") deshabilitar = true;
      //   if (input.phone == "") deshabilitar = true;
      //   if (deshabilitar === false){
      //     document.querySelector("#submit").disabled = false;
      //   } else {
      //     document.querySelector("#submit").disabled = true;
      //   }
          
      // }

      // document.querySelector("#name")?.addEventListener("keyup", habilitar);
      // document.querySelector("#type_of_person")?.addEventListener("keyup", habilitar);
      // document.querySelector("#email")?.addEventListener("keyup", habilitar);
      // document.querySelector("#phone")?.addEventListener("keyup", habilitar);


      return <div>
      <form className="form" onSubmit={handleSubmit} name ='form'>
      <h3 className="empresaTitle"> + Crear Empresa</h3>
        

        <div>
        <label htmlFor="name">Nombre de la empresa:</label>
        <input type="text" name ="name" id="name" value={input.name} onChange ={handleChange}
        className = {errors.name && 'warning'}></input>
        {errors.name && <p className ='danger'>{errors.name}</p>}
        </div>

        <div>
        <label>Persona:</label>
        <select onChange = {handleChange}id ="type_of_person" >
            <option value={input.type_of_person} >Natural</option>
            <option value={input.type_of_person} >Legal</option>
        </select>
        </div>
        <div>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id = "email" value={input.email} onChange = {handleChange}
        className = {errors.birthDay && 'warning'}/>
        {errors.email && <p className ='danger'>{errors.email}</p>}
        </div>
        <div>
        <label htmlFor="phone">Phone:</label>
        <input type="text" name="phone" value={input.phone} onChange = {handleChange}/>
        {errors.phone && <p className ='danger'>{errors.phone}</p>}
        </div>
       
        <span>{errorSubmit}</span>
       
        
        <button id="submit">Crear Empresa</button>
        
      
        
      </form>
      </div>
    }


export default CreateEmpresa