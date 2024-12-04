import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import api from "..";
import "../E-commerce/Product.css"

const Product = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState({});

  const getSingleProductData = async () => {
    try {
      const response = await api.post(`/product/single-product/${productId}`);
      if (response.data.success) {
        console.log(response.data.productData)
        setProductData(response.data.productData);
      }
    } catch (error) {
      toast.error(error?.response?.data.message);
    }
  };

  useEffect(() => {
    if (productId) {
      getSingleProductData();
    }
  }, [productId]);
  return (
    <div
      style={{
        width: "18%",
        height: "400px",
        border: "2px solid black",
        margin: "15px",
        padding: "10px",
        cursor: "pointer",
        margin: "auto",
      }}
    >
      <img
        style={{ width: "85%", height: "65%", border: "1px solid black" }}
        src={productData.image}
      />
      <p>
        <b>Name</b> - {productData.name}
      </p>
      <p>
        <b>Price</b> - {productData.price}/-
      </p>
      <p>
        <b>Quantity</b> - {productData.quantity}
      </p>
    </div>
  );
};

export default Product;
