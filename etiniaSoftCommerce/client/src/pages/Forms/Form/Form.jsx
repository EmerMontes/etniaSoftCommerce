import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Validation from './validation';
import { createProduct,clearErrors,getAllProducts,setNewErrors } from '../../../redux/actions';
import "./form.css";


const Form=()=>{
    const dispatch=useDispatch();
    const [selectedGender, setSelectedGender] = useState('default');
    const navigate=useNavigate()
    const gErrors=useSelector((state)=>state.errors)
    const [selectedSize, setSelectedSize] = useState('default');
    
    const [errors, setErrors] = useState({});

    const [input,setInput]=useState({
        name:"",
        description:"",
        brand:"",
        sale:0,
        category:"",
        size:[],
        color:"",
        price:60.000,
        genders:[],
        image:"",
        quantity:0
        
    });

    useEffect(()=>{
        return()=>dispatch(clearErrors())
    },[dispatch])


    const handleChange =(event)=>{
        setInput({
         ...input,
         [event.target.name]: event.target.value
        })
        setErrors(Validation({
         ...input,
         [event.target.name]: event.target.value
        }))
       };

       const validateInput = (inputData) =>{
        const errors = Validation(inputData)
        setErrors(errors)
      }


      const handleGenders=(event)=>{
        setSelectedGender(event.target.value);
        event.preventDefault();
        const rep=input.genders.find(gender=>gender===event.target.value)
        if(event.target.value !=="default" && !rep){
            setInput({
                ...input,genders:[...input.genders, event.target.value]
            })
            event.target.value="default"
            validateInput({
                ...input,genders:[...input.genders, event.target.value]
            })
        } event.target.value="default"
      };

      const handleSize=(event)=>{
        setSelectedSize(event.target.value);
        event.preventDefault();
        const rep=input.talla?.find(size=> size===event.target.value)

        if(event.target.value !== "default" && !rep){
            setInput({
                ...input,size:[...input.size, event.target.value]
            })
            event.target.value="default"

            validateInput({
                ...input,size:[...input.size,event.target.value]
            })
        }
      };
    const isSubmitDisabled=Object.keys(errors).length > 0;

    const handleSubmit=(event)=>{
        event.preventDefault();


        dispatch(createProduct(input)).then((postError)=>{

          if(!postError){
            setInput({
              name:"",
        description:"",
        brand:"",
        sale:0,
        category:"",
        size:[],
        color:"",
        price:60.000,
        genders:[],
        image:"",
        quantity:0
            })
            dispatch(getAllProducts())
            alert("Created Width Success")
            navigate("/home")
            dispatch(clearErrors())
          }else{
            dispatch(setNewErrors({type:createProduct,error:postError.response.data}))
          }  
        })
    };

    return(
      <div >
          <form className="globalCont" onSubmit={(event)=>handleSubmit(event)} >
          <h3 className="formTitle">Crear nuevo producto</h3>
          <br>
          </br>

          <div>
          <label> Nombre</label>
          <input className="input1" type="text"
              placeholder="enter a name"
              name="name"
              onChange={handleChange} 
          />  
              <p className="errores" style={{visibility: errors.name ? 'visible' : 'hidden' }}>{errors.name}</p>
         
          </div>
             
          <div>
            <label>Marca</label>
            <input className="input1"
              type="text"
              placeholder="enter a brand"
              name="brand"
              value={input.brand}
              onChange={handleChange}
            />
            <p className="errores" style={{visibility: errors.brand ? 'visible' : 'hidden' }}>{errors.brand}</p>
          </div>
             
          <div>
            <label>Categoria</label>
            <input className="input1"
              type="text"
              placeholder="enter a category"
              name="category"
              value={input.category}
              onChange={handleChange}
            />
             <p className="errores" style={{visibility: errors.category ? 'visible' : 'hidden' }}>{errors.category}</p>
          </div>

          <div>
          <label>Descripción</label>
          <br/>
          <textarea
          placeholder="add a description"
          name="description"
          onChange={handleChange}
          />
          <p className="errores" style={{ visibility: errors.description ? 'visible' : 'hidden' }}>{errors.description}</p>
          </div>

          <div>
            <label>Color</label>
            <input className="input1" type="text"
            name="color"
            onChange={handleChange}
             />
             <p className="errores" style={{ visibility: errors.color ? 'visible' : 'hidden' }}>{errors.color}</p>
          </div>

          <div>
            <label>Cantidad</label>
            <input className="input2"
              type="number"
              placeholder="Enter quantity"
              name="quantity"
              value={input.quantity}
              onChange={handleChange}
            />
            <p className="errores" style={{visibility: errors.quantity ? 'visible' : 'hidden' }}>{errors.quantity}</p>
          </div>
          <div>  
            <label>Descuento</label>
            <input className="input2"
              type="number"
              placeholder="Enter sale"
              name="sale"
              value={input.sale}
              onChange={handleChange}
            />
            <p className="errores" style={{visibility: errors.sale ? 'visible' : 'hidden' }}>{errors.sale}</p>
                    
          </div>
             
          <div>
          <label>Precio</label>
            <input className="input2" type="number"
            name="price"
            onChange={handleChange}
             />
            <p className="errores"  style={{ visibility: errors.price ? 'visible' : 'hidden' }}>{errors.price}</p>
          </div>
             
          <div>
              <label> Genero</label>
              <select onChange={handleGenders} value={selectedGender}>
              <option value="default">Seleccione Genero</option>
              <option value={"female"}>Mujer</option>
              <option value={"male"}>Hombre</option>
              </select>
              <p className="errores" style={{visibility:errors.genders ?'visible' : 'hidden'}}>{errors.genders}</p>
              {selectedGender !== 'default' && (
        <p >Genero seleccionado: {selectedGender}</p>
      )}
            </div>
           
        <div>
          <label>URL de Imagen</label>
          <input className="input3"
          type= "url"
          placeholder="send the URL of the image"
          name="image"
          onChange={handleChange}
          />
          
        </div>

          <div>
              <label>Talla</label>
              <select onChange={handleSize} value={selectedSize}>
                <option value="default">Seleccione Talla</option>
                <option value={"S/M"}>S/M</option>
                <option value={"M/L"}>M/L</option>
                <option value={"S"}>S</option>
                <option value={"M"}>M</option>
                <option value={"L"}>L</option>
                <option value={"XL"}>XL</option>
              </select>
              <p className="errores" style={{ visibility: errors.size ? 'visible' : 'hidden' }}>{errors.size}</p>
              {selectedSize !== 'default' && (
        <p>Talla seleccionada: {selectedSize}</p>
      )}
            </div>
      
     
        <div className="previewImage">
            <h5>Imagen Previa:</h5>
            <img className="img" src={input.image} alt="" />
          </div>
        
        <div className="buttonDiv">
          <button className="btn" disabled={isSubmitDisabled} style={isSubmitDisabled ? {opacity: "0.6", cursor: "not-allowed"}:null} type="submit">Crear Producto</button>
        </div>
          <p className="errores" style={{ visibility: gErrors?.createProduct?.error ? 'visible' : 'hidden' }}>{gErrors?.createProduct?.error}</p>
                    
            </form>
      </div>
    )

};

export default Form