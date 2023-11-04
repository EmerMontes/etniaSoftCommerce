import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Validation from './validation';
import { createProduct, clearErrors, getAllProducts, setNewErrors } from '../../../redux/actions';
import "./form.css";


const Form = () => {
  const dispatch = useDispatch();
 //const [selectedGender, setSelectedGender] = useState('default');
  const navigate = useNavigate()
  const gErrors = useSelector((state) => state.errors)
  const [selectedSize, setSelectedSize] = useState('default');

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    description: "",
    brand: "",
    sale: 0,
    category: "",
    size: [],
    color: "",
    price: "",
    gender: "",
    img: "",
    quantity: 0

  });

  useEffect(() => {
    return () => dispatch(clearErrors())
  }, [dispatch])


  const handleChange = (event) => {
    console.log(input)
    setInput({
      ...input,
      [event.target.name]: event.target.value  
    })
    setErrors(Validation({
      ...input,
      [event.target.name]: event.target.value
    }))
  };

  const validateInput = (inputData) => {
    const errors = Validation(inputData)
    setErrors(errors)
  }


  // const handleGenders = (event) => {
  //   setSelectedGender(event.target.value);
  //   event.preventDefault();
  //   const rep = input.gender.find(gender => gender === event.target.value)
  //   if (event.target.value !== "default" && !rep) {
  //     setInput({
  //       ...input, gender: [...input.gender, event.target.value]
  //     })
  //     event.target.value = "default"
  //     validateInput({
  //       ...input, gender: [...input.gender, event.target.value]
  //     })
  //   } event.target.value = "default"
  // };

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
  const isSubmitDisabled = Object.keys(errors).length > 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(document.querySelector("#quantityXS").value)
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
    console.log(input.size)
    console.log(input.quantity)

    dispatch(createProduct(input))

        setInput({
          name: "",
          description: "",
          brand: "",
          sale: 0,
          category: "",
          size: [],
          color: "",
          price: "",
          gender: "",
          image: "",
          quantity: 0
        })
      dispatch(getAllProducts())
      alert("Producto creado con exito")
      dispatch(clearErrors())
    
  };

  const habilitar = (event) => {
    switch (event.target.value){
      case "XS":
        if (document.querySelector("#quantityXS").disabled) document.querySelector("#quantityXS").disabled = false;
        else if (!document.querySelector("#quantityXS").disabled) document.querySelector("#quantityXS").disabled = true;
        break;

      case"S":
        if (document.querySelector("#quantityS").disabled) document.querySelector("#quantityS").disabled = false;
        else if (!document.querySelector("#quantityS").disabled) document.querySelector("#quantityS").disabled = true;
        break;

      case "M":
        if (document.querySelector("#quantityM").disabled) document.querySelector("#quantityM").disabled = false;
        else if (!document.querySelector("#quantityM").disabled) document.querySelector("#quantityM").disabled = true;
        break;

      case "L":
        if (document.querySelector("#quantityL").disabled) document.querySelector("#quantityL").disabled = false;
        else if (!document.querySelector("#quantityL").disabled) document.querySelector("#quantityL").disabled = true;
        break;

      case "XL":
        if (document.querySelector("#quantityXL").disabled) document.querySelector("#quantityXL").disabled = false;
        else if (!document.querySelector("#quantityXL").disabled) document.querySelector("#quantityXL").disabled = true;
        break; 

      case "XXL":
        if (document.querySelector("#quantityXXL").disabled) document.querySelector("#quantityXXL").disabled = false;
        else if (!document.querySelector("#quantityXXL").disabled) document.querySelector("#quantityXXL").disabled = true;
    }
      
  }

  return (
    <div >
      <form onSubmit={(event) => handleSubmit(event)} >
      <div className="globalCont"> 
        <h3 className="formTitle">Crear nuevo producto</h3>
        <br>
        </br>

        <div>
          <label> Nombre</label>
          <input className="input1" type="text"
            placeholder="enter a name"
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
            placeholder="enter a brand"
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
            placeholder="enter a category"
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
            placeholder="add a description"
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
            onChange={handleChange}
          />
          <p className="errores" style={{ visibility: errors.color ? 'visible' : 'hidden' }}>{errors.color}</p>
        </div>



        <div>
          <label>Precio</label>
          <input className="input2" type="number"
            name="price"
            onChange={handleChange}
          />
          <p className="errores" style={{ visibility: errors.price ? 'visible' : 'hidden' }}>{errors.price}</p>
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
          <p className="errores" style={{ visibility: errors.sale ? 'visible' : 'hidden' }}>{errors.sale}</p>
        </div>

        <div>
          <label> Genero</label>
          <select name="gender" onChange={handleChange}>
          <option value="default">Seleccione Genero</option>
            <option value="female">Mujer</option>
            <option value="male">Hombre</option>
          </select>
          <p className="errores" style={{ visibility: errors.genders ? 'visible' : 'hidden' }}>{errors.genders}</p>
         
        </div>

        <div>
          <label>URL de Imagen</label>
          <input className="input3"
            type="url"
            placeholder="send the URL of the image"
            name="image"
            onChange={handleChange}
          />
        </div>
        <div className="previewImage">
          <h5>Imagen Previa:</h5>
          <img className="img" src={input.img} alt="" />
        </div>

        </div>
        
        <div className="globalTalla">
            <label>Tallas:</label> 
        
          
            <input type="checkbox" id="XS" value="XS"onChange={habilitar}/>
            <label for="XS">XS</label>
            <input disabled className="input2"type="number" id="quantityXS"/>

            <input type="checkbox" id="S" value="S"onChange={habilitar}/>
            <label for="S">S</label>
            <input disabled className="input2"type="number" id="quantityS"/>

            <input type="checkbox" id="M" value="M"onChange={habilitar}/>
            <label for="M">M</label>
            <input disabled className="input2"type="number" id="quantityM"/>

            <input type="checkbox" id="L" value="L"onChange={habilitar}/>
            <label for="L">L</label>
            <input disabled className="input2"type="number" id="quantityL"/>

            <input type="checkbox" id="XL" value="XL"onChange={habilitar}/>
            <label for="XL">XL</label>
            <input disabled className="input2"type="number" id="quantityXL"/>

            <input type="checkbox"id="XXL" value="XXL"onChange={habilitar}/>
            <label for="XXL">XXL</label>
            <input disabled className="input2"type="number" id="quantityXXL"/>

          <p className="errores" style={{ visibility: errors.size ? 'visible' : 'hidden' }}>{errors.size}</p>
          {selectedSize !== 'default' && (
            <p>Talla seleccionada: {selectedSize}</p>
          )}
          

        </div>


        
        <div className="buttonDiv">
          <button className="btn" disabled={isSubmitDisabled} style={isSubmitDisabled ? { opacity: "0.6", cursor: "not-allowed" } : null} type="submit">Crear Producto</button>
        </div>
        <p className="errores" style={{ visibility: gErrors?.createProduct?.error ? 'visible' : 'hidden' }}>{gErrors?.createProduct?.error}</p>

      </form>
    </div>
  )

};

export default Form

/*<label>Cantidad Total</label>
          <input className="input2"
            type="number"
            placeholder="Enter quantity"
            name="quantity"
            value={input.quantity}
            onChange={handleChange}
          />
          <p className="errores" style={{ visibility: errors.quantity ? 'visible' : 'hidden' }}>{errors.quantity}</p>*/