import React, { useState } from "react";

const Mapping2 = () => {
  const [products, setProducts] = useState([
    {
      name: "Graphic Print Women's Oversized Tshirt",
      price: 1000,
      size: "L",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcStrov0NVl4cLPSysR0ibY8kX5yyqinxKfFIDsS33lOTVcFNUtuRgiK48I69PVp3_JY86a4EmYRHUZww0GiFauD8lQe5AfprhH5WUPMjNhs&usqp=CAE",
    },
    {
      name: "Juneberry Printed Round Neck Women's Tshirt",
      price: 359,
      size: "L",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRhcVXSUs3OQD9GXU5OQjIPGyzkZ9GDbO5_DjkhXMXgkSiVffMVVcmcEJ5v7v2uZm7uq-JUr9qeTAqsV5fdHzg4j-vO4fHOIOAXqCPBd_Ne&usqp=CAE",
    },
    {
      name: "Roadster Women Black & White Cotten Tshirt ",
      price: 5000,
      size: "XS",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTkq6WncBPLSSYu7V18A4TpBRp2UDIs28sVz69ZUNRuymAAQiRgyDiS89ClnSN_4hM4Ow6N6N_yDkRaWr5jEFjpafrB_7S3OV7J1FF-M70&usqp=CAE",
    },
    {
      name: "Women Solid Dark Green Shirt",
      price: 449,
      size: "L",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSj8wwOUDc9ID41rQON9WpgFn7sMqvniM3PohI879KBXzgliKzlEwkE3ADffVNYRF86nwIoEFd5ZBlYYj0w0PjUbBCsyaulAtmrN51TE_w&usqp=CAE",
    },
    {
      name: "FNOCKS Women Classic Opaque Formal Shirt ",
            price: 899,
      size: "XS",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ0j5NvN3s8WlZg1QW0NqmRVnV9ixnjnw40f74H-xCOV4O0qenSBFt8qmmTZL0yb9cOcYtWgUHWNiZrVJ4kkLeW6083iTpG8ugr5m-A0tkg&usqp=CAE",
    },
    {
      name: "Moda Rapido Women Green Black Printed Pure Cotton T-shirt ",
      price: 5000,
      size: "M",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT4P_3kG0tLdyV_JVCc7CaDyyftVzZwtf0tocuhZdMcDQpUPFGJfjRIDiA-P8-ZsDLQoE0DOiBvwAxQ_BYOjjhlkNGmwK0NWnGqbBA4tabs&usqp=CAE",
    },
    {
      name: "Difference Of Opinion Printed Women Round Neck Grey T-shirt.",
      price: 484,
      size: "M",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSPLqFu44laWOJ7m-6JwhfMaF4Pbn_4gDkJ7wnLSnac5NQuirX4L6tka3QzX6YQZVmpwJ53rq0GEZ1crUbWevneOeh0CSW5-23k9SriPOs&usqp=CAE",
    },
    {
      name: "Roadster Women Pink Green Camouflage Print Round Neck Pure Cotton T-shirt",
      price: 800,
      size: "L",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRk_b5JolteU1-jUgEWHAmUsROUWJvM_eYzHbAEKdZbHmrIwmrX1e0juBuBWsXbxjRJJYrhDPM4EE3kC1HhCeQCoNdTQVqEH3T1ujJnPpmhjbWElKzkE9TCYw&usqp=CAE",
    },
    {
      name: "Cream & Red, Women Striped Crew-Neck T-Shirt Classic Tshirts.",
      price: 5000,
      size: "L",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcREcuJoR0zG7rxtYS0qIKrkv8ZL5aqk06GsOnqs2rw6dh2x-ccNtYIuEebRLylGIwCGgCO1eolJ6K8FNul_5ZMvOFLpgaQPzpEplZkUuO9naXxu8WICp1Iw&usqp=CAE",
    },
    {
      name: "Eyebogler Solid Women Round Neck Navy Blue T-shirt",
      price: 1000,
      size: "M",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSlf8KHbFrdw4KyGnV7OZ1dcO3Uy66FcOGpo-hDTKkIamOCIgXLY7Co3R_mOUwSZQxThp5C7q7lBXU3OUoaxNP3ZJotgHIsJCU-8--WsWxW8fo-807exJwD&usqp=CAE",
    },
    
  ]);
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
        {products.map((itemDetails) => (
          <div
            style={{
              width: "18%",
              height: "450px",
              border: "2px solid black",
              marginBottom: "20px",
            }}
          >
            <img
              style={{ width: "100%", height: "60%" }}
              src={itemDetails.image}
            />
            <p><b>Name</b> - {itemDetails.name}</p>
            <p><b>Price</b> - {itemDetails.price}</p>
            <p><b>Size</b> - {itemDetails.size}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mapping2;