import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";


const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");

      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
    <>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
    </>
    );
};
const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
}
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center">
          <button className="btn btn-outline-dark me-2" onClick={()=>
        setFilter(data)} >All </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>
        filterProduct("women's clothing")}>Women</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>
        filterProduct("men's clothing")}>Men</button>
          <button className="btn btn-outline-dark me-2"onClick={()=>
        filterProduct("jewelery")}>Accessories</button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-4 mb-4 pt-4" key={product.id}>
                <div className="card h-100 text-center p-4">
                  <img src={product.image} class="card-img-top" height="300px" 
                    alt={product.title}/>
                  <div classNam="card-body">
                    <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                    <p className="card-text fw-bolder ">${product.price}</p>
                    <a
                      href="#"
                      className="btn btn-outline-dark me-2">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-10 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Our Products</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};
export default Products;
