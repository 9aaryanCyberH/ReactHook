import React from "react";
import useFetch from "./useFetch";
import "./Products.css";

const Products = () => {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) return <h2>Loading products...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div className="product-container">
      <h1>Product List</h1>
      <div className="products">
        {data &&
          data.slice(0, 8).map((product) => (
            <div key={product.id} className="card">
              <img src={product.images[0]} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
