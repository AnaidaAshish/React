import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import api from '..';
import { useNavigate } from 'react-router-dom';

const Viewproducts = () => {
  const [allProducts,setAllProducts] = useState([]);
  const router = useNavigate()
  async function getProducts(){
    try{
      const response = await api.get("/product/view-products")
      if(response.data.success){
        setAllProducts(response.data.allProducts)
      }
    }catch(error){
      toast.error(error?.response?.data.message)
    }
  }
 useEffect(()=>{
  getProducts();
 },[])
  return (
    <div>
      <h1>Products</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {allProducts.map((itemDetails) => (
          <div
            style={{
              width: "18%",
              height: "400px",
              border: "2px solid black",
              margin: "15px",
              "padding": "10px",
              cursor:"pointer"
            }}
            onClick={()=>{router(`/product/${itemDetails._id}`)}}
          >
            <img
              style={{ width: "85%", height: "65%","border":"1px solid black"}}
              src={itemDetails.image}
            />
            <p><b>Name</b> - {itemDetails.name}</p>
            <p><b>Price</b> - {itemDetails.price}/-</p>
            <p><b>Quantity</b> - {itemDetails.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Viewproducts