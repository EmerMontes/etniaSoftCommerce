import { useParams } from "react-router-dom"
export default  function UserDetail (props){
    const { id } = useParams();

    return(
        <div>Este es el componente Detail de User {id}</div>
    )
}