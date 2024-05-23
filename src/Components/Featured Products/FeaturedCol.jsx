import React from "react";

function FeaturedCol({ img, prod_name, fourth, fifth, amt }) {
    const addToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

        const existingItemIndex = cartItems.findIndex(item => item.prod_name === prod_name);
        
        if (existingItemIndex !== -1) {
            cartItems[existingItemIndex].quantity += 1;
        } else {
            cartItems.push({
                img: img,
                prod_name: prod_name,
                amt: amt,
                quantity: 1
            });
        }

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    };

    return (
        <div className="col-4">
            <img src={img} alt={prod_name} />
            <h4>{prod_name}</h4>
            <div className="rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className={fourth}></i>
                <i className={fifth}></i>
            </div>
            <p>${amt}</p>
            <button onClick={addToCart} className="btn">
                <i className="fa-solid fa-shopping-cart"></i> Add to Cart
            </button>
        </div>
    );
}

export default FeaturedCol;
