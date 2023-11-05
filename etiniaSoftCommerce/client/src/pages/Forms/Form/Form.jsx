import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Validation from './validation';
import primeraMayuscula from '../../../functions/primeraMayuscula';
import { createProduct, clearErrors } from '../../../redux/actions';
import "./form.css";


const Form = () => {
  const dispatch = useDispatch();

  const [errorSubmit,setErrorSubmit] = useState("")
  const gErrors = useSelector((state) => state.errors)
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    description: "",
    brand: "",
    sale: 0,
    category: "",
    size: [],
    color: "",
    price: 0,
    gender: "",
    img: "",
    quantity: 0,
    quantityXS: null,
    quantityS: null,
    quantityM: null,
    quantityL: null,
    quantityXL: null,
    quantityXXL: null,
  });

  useEffect(() => {
    return () => dispatch(clearErrors())
  }, [dispatch])


  const handleChange = (event) => {
    
    setInput({
      ...input,
      [event.target.name]: event.target.value  
    })
    setErrors(Validation({
      ...input,
      [event.target.name]: event.target.value
    }))
    setErrorSubmit("");
  };

  // const validateInput = (inputData) => {
  //   const errors = Validation(inputData)
  //   setErrors(errors)
  // }



  let isSubmitDisabled = Object.keys(errors).length > 0;


  const handleSize = (event) => {
    setSelectedSize(event.target.value);
    event.preventDefault();
    const rep = input.talla?.find(size => size === event.target.value)

    if (event.target.value !== "default" && !rep) {
      setInput({
        ...input, size: [...input.size, event.target.value]
        
      })
      event.target.value = "default"

      validateInput({
        ...input, size: [...input.size, event.target.value]
      })
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    
    // para armar el muñeco
    let selected = [];
    if (document.querySelector("#quantityXS").value != 0 && document.querySelector("#quantityXS").disabled === false) {
      selected.push({"XS": document.querySelector("#quantityXS").value})
    }
    if (document.querySelector("#quantityS").value != 0 && document.querySelector("#quantityS").disabled === false) {
      selected.push({"S": document.querySelector("#quantityS").value})
    }
    if (document.querySelector("#quantityM").value != 0 && document.querySelector("#quantityM").disabled === false) {
      selected.push({"M": document.querySelector("#quantityM").value})
    }
    if (document.querySelector("#quantityL").value != 0 && document.querySelector("#quantityL").disabled === false) {
      selected.push({"L": document.querySelector("#quantityL").value})
    }
    if (document.querySelector("#quantityXL").value != 0 && document.querySelector("#quantityXL").disabled === false) {
      selected.push({"XL": document.querySelector("#quantityXL").value})
    }
    if (document.querySelector("#quantityXXL").value != 0 && document.querySelector("#quantityXXL").disabled === false) {
      selected.push({"XXL": document.querySelector("#quantityXXL").value})
    }
    
    let suma = 0;
    input.size = selected
    for (let option of input.size ){
      suma= suma + parseInt(Object.values(option))
    }
    input.quantity = suma;
    input.name = input.name.toUpperCase();
    input.brand = input.brand.toUpperCase();
    input.category = primeraMayuscula(input.category);
    input.color = primeraMayuscula(input.color);

    console.log(input)
    
    if (input.quantity === 0) setErrorSubmit("Debe escoger una talla y una cantidad")
    else {
    //dispatch(createProduct(input))

        setInput({
          name: "",
          description: "",
          brand: "",
          sale: 0,
          category: "",
          size: [],
          color: "",
          price: 0,
          gender: "default",
          img: "",
          quantity: 0,
          quantityXS: 0,
          quantityS: 0,
          quantityM: 0,
          quantityL: 0,
          quantityXL: 0,
          quantityXXL: 0,
          
        })
      console.log(input)
      document.querySelector("#submit").disabled = true;
      alert("Producto creado con exito")
      dispatch(clearErrors())
    }
  };

  const habilitar = (event) => {
    switch (event.target.value){
      case "XS":
        if (document.querySelector("#quantityXS").disabled) document.querySelector("#quantityXS").disabled = false;
        else if (!document.querySelector("#quantityXS").disabled) {
          document.querySelector("#quantityXS").disabled = true;
          document.querySelector("#quantityXS").value = null;
        }
        break;

      case"S":
        if (document.querySelector("#quantityS").disabled) document.querySelector("#quantityS").disabled = false;
        else if (!document.querySelector("#quantityS").disabled) {
          document.querySelector("#quantityS").disabled = true;
          document.querySelector("#quantityS").value = null;
        }
        break;

      case "M":
        if (document.querySelector("#quantityM").disabled) document.querySelector("#quantityM").disabled = false;
        else if (!document.querySelector("#quantityM").disabled){
          document.querySelector("#quantityM").disabled = true;
          document.querySelector("#quantityM").value = null;
        }
        break;

      case "L":
        if (document.querySelector("#quantityL").disabled) document.querySelector("#quantityL").disabled = false;
        else if (!document.querySelector("#quantityL").disabled) {
          document.querySelector("#quantityL").disabled = true;
          document.querySelector("#quantityL").value = null;
        }
        break;

      case "XL":
        if (document.querySelector("#quantityXL").disabled) document.querySelector("#quantityXL").disabled = false;
        else if (!document.querySelector("#quantityXL").disabled) {
          document.querySelector("#quantityXL").disabled = true;
          document.querySelector("#quantityXL").value = null;
        }
        break; 

      case "XXL":
        if (document.querySelector("#quantityXXL").disabled) document.querySelector("#quantityXXL").disabled = false;
        else if (!document.querySelector("#quantityXXL").disabled){
          document.querySelector("#quantityXXL").disabled = true;
          document.querySelector("#quantityXXL").value = null;
        }
    }
      
  }

  return (
    <div >
      <form onSubmit={(event) => handleSubmit(event)} >
      <div className="globalCont"> 
        <h3 className="formTitle">+ Crear nuevo producto</h3>
        <br>
        </br>

        <div>
          <label> Nombre</label>
          <input className="input1" type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
          <p className="errores" style={{ visibility: errors.name ? 'visible' : 'hidden' }}>{errors.name}</p>

        </div>

        <div>
          <label>Marca</label>
          <input className="input1"
            type="text"
            name="brand"
            value={input.brand}
            onChange={handleChange}
          />
          <p className="errores" style={{ visibility: errors.brand ? 'visible' : 'hidden' }}>{errors.brand}</p>
        </div>

        <div>
          <label>Categoria</label>
          <input className="input1"
            type="text"
            name="category"
            value={input.category}
            onChange={handleChange}
          />
          <p className="errores" style={{ visibility: errors.category ? 'visible' : 'hidden' }}>{errors.category}</p>
        </div>

        <div>
          <label>Descripción</label>
          <br />
          <textarea
            name="description"
            value={input.description}
            onChange={handleChange}
          />
          <p className="errores" style={{ visibility: errors.description ? 'visible' : 'hidden' }}>{errors.description}</p>
        </div>

        <div>
          <label>Color</label>
          <input className="input1" type="text"
            name="color"
            value={input.color}
            onChange={handleChange}
          />
          <p className="errores" style={{ visibility: errors.color ? 'visible' : 'hidden' }}>{errors.color}</p>
        </div>



        <div>
          <label>Precio</label>
          <input className="input2" type="number" min="0"
            name="price"
            value={input.price}
            onChange={handleChange}
          />
          <p className="errores" style={{ visibility: errors.price ? 'visible' : 'hidden' }}>{errors.price}</p>
        </div>

        <div>
          <label>Descuento</label>
          <input className="input2"
            type="number" min = "0"
            name="sale"
            value={input.sale}
            onChange={handleChange}
          />
          <p className="errores" style={{ visibility: errors.sale ? 'visible' : 'hidden' }}>{errors.sale}</p>
        </div>

        <div>
          <label> Genero</label>
          <select name="gender" onChange={handleChange} value={input.gender}>
          <option value="default">Seleccione Genero</option>
            <option value="female">Mujer</option>
            <option value="male">Hombre</option>
          </select>
          <p className="errores" style={{ visibility: errors.gender ? 'visible' : 'hidden' }}>{errors.gender}</p>
         
        </div>

        <div>
          <label>URL de Imagen</label>
          <input className="input3"
            type="url"
            name="img"
            value={input.img}
            onChange={handleChange}
          />
          <p className="errores" style={{ visibility: errors.image ? 'visible' : 'hidden' }}>{errors.image}</p>
          <p className= "errores">{errorSubmit}</p>
        </div>
        <div className="previewImage">
          <h5>Imagen Previa:</h5>
          <img className="img" src={input.img} width="50px" height="80px" alt="" wi/>
        </div>

        </div>
        
        <div className="globalTalla">
            <label>Tallas:</label> 
        
          
            <input type="checkbox" name="xs" id="XS" value="XS"onChange={habilitar}/>
            <label for="XS">XS</label>
            <input disabled className="input2"type="number" min="0" id="quantityXS" name="quantityXS" value={input.quantityXS} onChange={handleChange}/>

            <input type="checkbox" name="s" id="S" value="S"onChange={habilitar}/>
            <label for="S">S</label>
            <input disabled className="input2"type="number" min="0" id="quantityS" name="quantityS" value={input.quantityS} onChange={handleChange}/>

            <input type="checkbox" name= "m" id="M" value="M"onChange={habilitar}/>
            <label for="M">M</label>
            <input disabled className="input2"type="number" min="0" id="quantityM" name="quantityM" value={input.quantityM} onChange={handleChange}/>

            <input type="checkbox" name="l" id="L" value="L"onChange={habilitar}/>
            <label for="L">L</label>
            <input disabled className="input2"type="number" min="0" id="quantityL" name= "quantityL"value={input.quantityL} onChange={handleChange}/>

            <input type="checkbox" name="xl"id="XL" value="XL"onChange={habilitar}/>
            <label for="XL">XL</label>
            <input disabled className="input2"type="number" min="0" id="quantityXL" name= "quantityXL" value={input.quantityXL} onChange={handleChange}/>

            <input type="checkbox" name="xxl" id="XXL" value="XXL"onChange={habilitar}/>
            <label for="XXL">XXL</label>
            <input disabled className="input2"type="number" min="0" id="quantityXXL" name="quantityXXL" value={input.quantityXXL} onChange={handleChange}/>

        </div>
        
        <div className="buttonDiv">
          <button id="submit" className="btn" disabled={isSubmitDisabled} style={isSubmitDisabled ? { opacity: "0.6", cursor: "not-allowed" } : null} type="submit">Crear Producto</button>
          </div>
          <p className="errores" style={{ visibility: gErrors?.createProduct?.error ? 'visible' : 'hidden' }}>{gErrors?.createProduct?.error}</p>


        
        
      </form>
    </div>
  )

};

export default Form

