import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  console.log(id, "id");
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      console.log(data);
      setProduct(data);
    };
    getProduct();
  }, []);

  !Object.keys(product).length > 0 && <div>Product Not Found</div>;
  return (
    <div class="container mt-5">
    <div class="row">
      <div class="col-lg-6">
        <img src={product?.image} alt="Product Image" class="img-fluid"/>
      </div>
      <div class="col-lg-6">
        <h2 class="mb-3">{product?.title}</h2>
        <p class="text-muted">{product?.category}</p>
        <h3 class="mb-4">${product?.price}</h3>
        <p>
        {product?.description}
        </p>
        <button type="button" class="btn blackbutton b1">Add to Cart</button>
      </div>
    </div>
  </div>
  );
};
export default Product;
