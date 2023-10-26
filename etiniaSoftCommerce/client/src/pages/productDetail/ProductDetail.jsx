import { useParams } from "react-router-dom";

export default  function ProductDetail (props){
    const { id } = useParams();
    //const Product = useSelector((state)=> state);

    // const loadIdProduct = ()=>{
    //     if(id === Product.id) return;
    //     else dispatch(idProduct(id))
    // }

    // useEffect(()=>{
    //     loadIdProduct()
    // },[])

    return(
        <div>Este es el componente Detail Product {id}</div>
    )
}

//Detail debe renderizar: 
// id - name - brand - gender - category - image - description - price - quantity - size - color - sale 