import React, { useEffect, useState } from "react";
import FeaturedCol from "./Featured Products/FeaturedCol";
import { useParams } from "react-router-dom";
import row1 from "./Featured Products/rows";
import Product1 from "/src/assets/images/product-1.jpg"
import Product2 from "/src/assets/images/product-2.jpg"
import Product3 from "/src/assets/images/product-3.jpg"
import Product4 from "/src/assets/images/product-4.jpg"
// import gal1 from "../assets/images/gallery-1.jpg"
// import gal2 from "../assets/images/gallery-2.jpg"
// import gal3 from "../assets/images/gallery-3.jpg"
// import gal4 from "../assets/images/gallery-4.jpg"

function ProductsDetails() {
    const { id } = useParams(); // Extract productId from URL

    // State to hold product data
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = row1.find(product => product.id === Number(id));

        // Update state with the found product
        if (foundProduct) {
            setProduct(foundProduct);
        }
    }, [id]);

    const addToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

        const existingItemIndex = cartItems.findIndex(item => item.prod_name === product.prod_name);

        if (existingItemIndex !== -1) {
            cartItems[existingItemIndex].quantity += 1;
        } else {
            cartItems.push({
                img: product.img,
                prod_name: product.prod_name,
                amt: product.amount,
                quantity: 1
            });
        }

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    };

    return (
        <>
            <div className="smallcontainer single-product">
                <div className="row">
                    <div className="col-2">
                        <img src={product?.img} width="100%" id="productimg" alt="Product" />
                        {/* <div className="small-img-row">
                            <div className="small-img-col">
                                <img src={gal1} alt="" width="100%" className="small-img" />
                            </div>
                            <div className="small-img-col">
                                <img src={gal2} alt="" width="100%" className="small-img" />
                            </div>
                            <div className="small-img-col">
                                <img src={gal3} alt="" width="100%" className="small-img" />
                            </div>
                            <div className="small-img-col">
                                <img src={gal4} alt="" width="100%" className="small-img" />
                            </div>
                        </div> */}
                    </div>
                    <div className="col-2">
                        <p>Home / T-Shirt</p>
                        <h1>{product?.prod_name}</h1>
                        <h4>$50.00</h4>
                        <select>
                            <option value="">Select Size</option>
                            <option value="XXL">XXL</option>
                            <option value="XL">XL</option>
                            <option value="Large">Large</option>
                            <option value="Medium">Medium</option>
                            <option value="Small">Small</option>
                        </select>
                        {/* <input type="number" value="1" /> */}
                        <button onClick={addToCart} className="btn">
                            <i className="fa-solid fa-shopping-cart"></i> Add to Cart
                        </button>
                        <h3>Product Details <i className="fa fa-indent"></i></h3>
                        <br />
                        <p>Give Your Summer Wardrobe a style upgrade with the HRX Men's Active T-shirt. Team it with a pair of shorts for your morning workout or a denims for an evening out with the guys.</p>
                    </div>
                </div>
            </div>
            <div className="smallcontainer">
                <div className="row row-2">
                    <h2>Related Products</h2>
                    <p>View More</p>
                </div>
            </div>
            <div className="smallcontainer">
                <div className="row">
                
            <FeaturedCol img={Product1} prod_name="Red Printed Tshirt" fourth="fa-solid fa-star" fifth="fa-regular fa-star" amt={32}/>
            <FeaturedCol img={Product2} prod_name="Black Sports Shoes" fourth="fa-solid fa-star-half-stroke" fifth="fa-regular fa-star" amt={45}/>
            <FeaturedCol img={Product3} prod_name="Grey Trousers" fourth="fa-solid fa-star-half-stroke" fifth="fa-regular fa-star" amt={39.9}/>
            <FeaturedCol img={Product4} prod_name="Blue Polo" fourth="fa-solid fa-star" fifth="fa-regular fa-star" amt={54}/>
                </div>
            </div>
        </>
    );
}

export default ProductsDetails;
