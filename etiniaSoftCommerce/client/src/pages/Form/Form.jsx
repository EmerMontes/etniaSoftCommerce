import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Validation from './validation';
import { getFilterGenero,createProduct,clearErrors,getAllProducts,setNewErrors } from '../../redux/actions';
import style from "./form.module.css";


const Form=()=>{
    const dispatch=useDispatch();
    const genders=useSelector((state)=>state.genders);
    const navigate=useNavigate()
    const gErrors=useSelector((state)=>state.errors)
    
    const [errors, setErrors] = useState({});

    const [input,setInput]=useState({
        name:"",
        description:"",
        size:[],
        color:"",
        price:60.000,
        genders:[],
        image:""
        
    });

    useEffect(()=>{
        dispatch(getFilterGenero())
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
        event.preventDefault();
        const rep=input.talla.find(size=> size===event.target.value)

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
      const handleDeleteGen=(event)=>{
        const filteredGen=input.genders.filter(gender=>gender !==event.target.value)
        setInput({
            ...input,
            genders:filteredGen
        })
        validateInput({...input,genders:filteredGen})
      }

      const handleDeleteSize =(event)=>{
        const filteredSize= input.size.filter(size =>size !==event.target.value)
        setInput({
            ...input,
            size:filteredSize
        })
    validateInput({...input,size:filteredSize})
    }
    
    const isSubmitDisabled=Object.keys(errors).length > 0;

    const handleSubmit=(event)=>{
        event.preventDefault();


        dispatch(createProduct(input)).then((postError)=>{

          if(!postError){
            setInput({
                name:"",
                description:"",
                size:[],
                color:"",
                price:60.000,
                genders:[],
                image:""
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
      <div className={style.globalCont}>
        <div className={style.formContenedor}>
          <h3 className={style.formTitle}>Create your own Product</h3>
          <form onSubmit={(event)=>handleSubmit(event)} className={style.labelsInputs}>
            <div className={style.name}>
              <label> Name</label>
              <input
              type="text"
              placeholder="enter a name"
              name="name"
              onChange={handleChange} 
              />
              <p className={style.errores} style={{visibility: errors.name ? 'visible' : 'hidden' }}>{errors.name}</p>
            </div>

            <div className={style.desc}>
          <label>Description</label>
          <br/>
          <textarea
          placeholder="add a description"
          name="description"
          onChange={handleChange}
          />
          <p className={style.errores} style={{ visibility: errors.description ? 'visible' : 'hidden' }}>{errors.description}</p>
          </div>

          <div className={style.colRat}>
            <label>Color</label>
            <input type="date"
            name="color"
            onChange={handleChange}
             />
             <p className={style.errores} style={{ visibility: errors.color ? 'visible' : 'hidden' }}>{errors.color}</p>
         
          <div className={style.price}>
            <label>Price</label>
            <input type="number"
            name="price"
            min={60.000}
            max={100.000}
            onChange={handleChange}
             />
             <p className={style.errores}  style={{ visibility: errors.price ? 'visible' : 'hidden' }}>{errors.price}</p>
          </div>

          </div>

          <div className={style.sizeGen}>

            <div className={style.size}>
              <label>Size</label>
              <select onChange={(event)=>handleSize(event)}>
                <option value="default">choose size</option>
                <option value={"S/M"}>S/M</option>
                <option value={"M/L"}>M/L</option>
                <option value={"S"}>S</option>
                <option value={"M"}>M</option>
                <option value={"L"}>L</option>
                <option value={"XL"}>XL</option>
              </select>
              <p className={style.errores} style={{ visibility: errors.size ? 'visible' : 'hidden' }}>{errors.size}</p>
            </div>
            
            <div className={style.gen}>
              <label> Genders</label>
              <select onClick={(event)=>handleGenders(event)}>
              <option value="default">Choose Genders</option>
              {genders.map((g)=>{
                return <option value={g.name}>{g.name}</option>
              })}
              </select>
              <p className={style.errores} style={{visibility:errors.genders ?'visible' : 'hidden'}}>{errors.genders}</p>

            </div>
          </div>

          <div className={style.imageInput}>
          <label>Image</label>
          <input
          type= "url"
          placeholder="send the URL of the image"
          name="image"
          onChange={handleChange}
          />
        </div>

        <br/>
          <br/>
        <div className={style.buttonDiv}>
          <button className={style.btn} disabled={isSubmitDisabled} style={isSubmitDisabled ? {opacity: "0.6", cursor: "not-allowed"}:null} type="submit">Create</button>
        </div>
          <p className={style.errores} style={{ visibility: gErrors?.createProduct?.error ? 'visible' : 'hidden' }}>{gErrors?.createProduct?.error}</p>
          </form>
        </div>
        <div className={style.previewCont}>
          <h5>Select size:</h5>
          <div className={style.previewSize}>
            {input.size.map((siz)=>{
              return <div className={style.size} key={siz}>{siz}
              <button className={style.btnDelete} value={siz} onClick={(e)=>handleDeleteSize(e)}>x</button>
              </div>
            })}
          </div>


          <h5>Selected Genders:</h5>
          <div className={style.previewGender}>
            {input.genders.map((gen)=>{
              return <div key={gen} className={style.genders}>{gen}
              <button className={style.btnDelete} value={gen} onClick={(e)=> handleDeleteGen(e)}>x</button>
              </div>
            })}
          </div>

          <div className={style.previewImage}>
            <h5>Image Preview:</h5>
            <img className={style.img} src={input.image} alt="not found" />
          </div>
        </div>

      </div>
    )

};

export default Form