import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "..";
import "../component/E-commerce/Viewproducts.css";
import { useNavigate } from "react-router-dom";

const Viewproducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedSortType, setSelectedSortType] = useState("null");
  const router = useNavigate();

  console.log("Selected Sort Type is:", selectedSortType);
  async function getProducts() {
    try {
      const response = await api.get("/product/view-products");
      if (response.data.success) {
        setAllProducts(response.data.allProducts);
      }
    } catch (error) {
      toast.error(error?.response?.data.message);
    }
  }

  const getSortedProducts = async () => {
    try {
      const response = await api.post("/product/sort-product", {
        sortMethod: selectedSortType,
      });
      if (response.data.success) {
        setAllProducts(response.data.products);
      }
    } catch (error) {
      toast.error(error?.response?.data.message);
    }
  };

  const filterProducts = async (category) => {
    try {
      const response = await api.post("/product/filter-product", {
        category: category,
      });
      if (response.data.success) {
        setAllProducts(response.data.products);
      }
    } catch (error) {
      toast.error(error?.response?.data.message);
    }
  };

  useEffect(() => {
    if (allProducts?.length > 0 && categories.length == 0) {
      const singleCategory = [
        ...new Set(allProducts.map((product) => product.category)),
      ];
      setCategories(singleCategory);
      // console.log(singleCategory, "Single Categories");
    }
  }, [allProducts]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (selectedSortType !== "null") {
      getSortedProducts();
    }
  }, [selectedSortType]);

  return (
    <div>
      <h3>Sort Price</h3>
      <select onChange={(ele) => setSelectedSortType(ele.target.value)}>
        <option>Sort</option>
        <option value="null">Select Price Range</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
        <option value="newArrivals">New Arrivals</option>
      </select>

      <h3>Filter</h3>
      <h3>Category</h3>
      <select onChange={(ele) => filterProducts(ele.target.value)}>
        <option value="">Choose Category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

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
              padding: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              router(`/product/${itemDetails._id}`);
            }}
          >
            <img
              style={{ width: "85%", height: "65%", border: "1px solid black" }}
              src={itemDetails.image}
            />
            <p>
              <b>Name</b> - {itemDetails.name}
            </p>
            <p>
              <b>Price</b> - {itemDetails.price}/-
            </p>
            <p>
              <b>Quantity</b> - {itemDetails.quantity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Viewproducts;
