import { useState } from "react"
import { useParams } from "react-router-dom"

function UseParams(){

const {id} = useParams()
const [productDetails,setproductDetails] = useState({})
return (
    <h1>UseParams: {id}</h1>
)
}
export default UseParams