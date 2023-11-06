import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
//import { createEmpresa } from "../../../redux/actions";
import validate from "./validate"
import './formCtaBanco.css'
import primeraMayuscula from "../../../functions/primeraMayuscula";


   
const CreateCtaBanco = () => {
    
    const dispatch = useDispatch();
    
    const [errorSubmit,setErrorSubmit] = useState("");
    
    const [input, setInput] = useState({
        accountNumber: '',
        bank: '',
        typeOfAccount: 'default',
        clientName: '',
        
    })
    
    const [errors, setErrors] = useState({
      accountNumber: '',
      bank: '',
      clientName: '',
       
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
          console.log(input)
          let long = Object.values(errors);
          if (long.length === 0) {
          input.bank = primeraMayuscula(input.bank)
          input.clientName = primeraMayuscula(input.clientName)
         // await dispatch(createEmpresa(input))
          setErrorSubmit(`La Cuenta ha sido creada`)
          setInput({accountNumber:'', typeOfAccount: 'default', bank:'', clientName: ''})
          setErrors({accountNumber:'', bank:'', clientName: ''})
          
          }else {
            setErrorSubmit("Debe llenar todos los campos sin errores");
           
          }
        }catch (error) {
          setErrorSubmit(error)

        }
        
      }
    
      return <div>
      <form  onSubmit={handleSubmit} name ='form'>
        <div className="form">
            <h3 className="empresaTitle"> + Crear Cuenta Bancaria</h3>
        
            <div>
                <label >Numero Cuenta:</label>
                <input type="text" name="accountNumber" id = "accountNumber" value={input.accountNumber} onChange = {handleChange}
                className = {errors.accountNumber && 'warning'}/>
                {errors.accountNumber && <p className ='danger'>{errors.accountNumber}</p>}
            </div>

            <div>
                <label>Nombre Banco:</label>
                <input type="text" name ="bank" id="bank" value={input.bank} onChange ={handleChange}
                className = {errors.bank && 'warning'}></input>
                {errors.bank && <p className ='danger'>{errors.bank}</p>}
            </div>

            <div>
                <label >Tipo de Cuenta:</label>
                <select onChange = {handleChange} name ="typeOfAccount" value={input.typeOfAccount}>
                    <option value="default">Seleccione una opción</option>
                    <option value="Corriente">Corriente</option>
                    <option value="Ahorros">Ahorros</option>
                </select>
            </div>
            <div>
                <label>Nombre del titular:</label>
                <input type="text" name="clientName" value={input.clientName} onChange = {handleChange}/>
                {errors.clientName && <p className ='danger'>{errors.clientName}</p>}
            </div>

            <span className ='danger'>{errorSubmit}</span>
            <button id="submit">Crear Cuenta Banco</button>
        </div>
             
        
      </form>
      </div>
    }


export default CreateCtaBanco