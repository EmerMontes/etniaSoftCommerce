import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getByID } from "../../redux/actions";

export default  function ProductDetail (props){
    const dispatch = useDispatch();
    const Product = useSelector((state)=> state.productDetail);
    const { id } = useParams();

    const loadIdProduct = ()=>{
        dispatch(getByID(id))
    }

    useEffect(()=>{
        loadIdProduct()
        console.log(Product)
    },[])

    return(
        <div>
            <div></div>
            {Product && <div>
                <h2>{Product.name}</h2>
                <h2>{Product.brand}</h2>
                <h2>{Product.gender}</h2>
                <h2>{Product.size}</h2>
                <h2>{Product.color}</h2>
                <h2>{Product.sale}</h2>
                <h2>{Product.category}</h2>
                <h2>{Product.description}</h2>
                <h2>{Product.price}</h2>
                <h2>{Product.quantity}</h2>
                <h2>{Product.img}</h2>
                </div>}
        </div>
    )
}

//Detail debe renderizar: 
// id - name - brand - gender - category - image - description - price - quantity - size - color - sale 