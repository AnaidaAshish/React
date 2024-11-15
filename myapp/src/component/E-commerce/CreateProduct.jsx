import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "..";
import { AuthContext } from "../context/AuthContext";

function CreateProduct() {
  const router = useNavigate();
  const { state } = useContext(AuthContext);
  const [productData, setProductData] = useState({
    productName: "",
    productCategory: "",
    productPrice: "",
    productQuantity: "",
    productImage: "",
  });
  console.log(productData, "productData");
  function handleChange(event) {
    setProductData({ ...productData, [event.target.name]: event.target.value });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    if (!state?.user?.userId) {
      toast.error("Login First");
      router("/login");
    }
    if (
      productData.productName &&
      productData.productCategory &&
      productData.productPrice &&
      productData.productImage &&
      productData.productQuantity
    ) {
      try {
        let response = await api.post("/product/create-product", {
          productData,
          userId: state?.user?.userId,
        });

        if (response.data.success) {
          toast.success(response.data.message);
          router("/view-products");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    } else {
      toast.error("All fields are required");
    }
  }

  return (
    <div className="parentdiv">
      <div className="regi">
        <h1>Create Product</h1>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>Product Name</label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Type your productName.."
            name="productName"
          />
          <br />
          <label>Product Category</label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Type your productCategory.."
            name="productCategory"
          />
          <br />
          <label>Product Price</label>
          <br />
          <input
            onChange={handleChange}
            type="number"
            placeholder="Type your productPrice.."
            name="productPrice"
          />
          <br />
          <label>Product Quantity</label>
          <br />
          <input
            onChange={handleChange}
            type="number"
            placeholder="Add Product Quantity"
            name="productQuantity"
          />
          <br />
          <label>Product Image</label>
          <br />
          <input
            onChange={handleChange}
            type="url"
            placeholder="Confirm your Image Url.."
            name="productImage"
          />
          <br />
          <input className="button" type="submit" value="Create" />
        </form>
      </div>
    </div>
  );
}
export default CreateProduct;
