import React from "react";
import productsData from "./productsData";
import { Link } from "react-router-dom";

const Products = () => {
  const products = productsData.map(product => {
    return (
      <div className="product-item" key={product.id}>   
        
       
        <a className="proname" href={`/products/${product.id}`}>
          <img src={product.img} alt={product.name} />
          <h3 style={{marginTop:"1rem" , marginBottom:"1rem"}}>{product.name}</h3>
        </a>
      
       
      </div>
    );
  });
  return (
    <>
 <h1 className="resp">Recipes</h1>
 <div className="products-container">{products}</div>;
     
    
    </>
  );
};

export default Products;
