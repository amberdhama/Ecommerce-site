import React from "react";
import row1 from "../Featured Products/rows";
import Filter from "./filter";
import FeaturedCol from "../Featured Products/FeaturedCol";
import MoreProd from "./MoreProd";
import { NavLink } from "react-router-dom";



function Product() {
  const chunkSize = 4; 
  const chunkedProducts = [];

  for (let i = 0; i < row1.length; i += chunkSize) {
    chunkedProducts.push(row1.slice(i, i + chunkSize));
  }

  return (
    <div className="smallcontainer">
    <Filter/>
   
      {chunkedProducts.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((product, index) => (
            <NavLink
              to={`/productdet/${rowIndex * chunkSize + index + 1}`}
              key={index}
              className="col-4"
            >
              <FeaturedCol
                img={product.img}
                prod_name={product.prod_name}
                fourth={product.fourth}
                fifth={product.fifth}
                amt={product.amount}
              />
            </NavLink>
          ))}
         
        </div>
      ))}
      <MoreProd/>
    </div>
  );
}

export default Product;
