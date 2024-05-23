import React, { useState, useEffect } from "react";

function Cart() {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);

    useEffect(() => {
        setCartItems(JSON.parse(localStorage.getItem("cartItems")) || []);
    }, []);

    const updateCartItemsInLocalStorage = (items) => {
        localStorage.setItem("cartItems", JSON.stringify(items));
        setCartItems(items);
    };

    const removeFromCart = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        updateCartItemsInLocalStorage(updatedCartItems);
    };

    const increaseQuantity = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity = (updatedCartItems[index].quantity || 1) + 1;
        updateCartItemsInLocalStorage(updatedCartItems);
    };

    const decreaseQuantity = (index) => {
        const updatedCartItems = [...cartItems];
        if (updatedCartItems[index].quantity > 1) {
            updatedCartItems[index].quantity -= 1;
            updateCartItemsInLocalStorage(updatedCartItems);
        }
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const itemAmount = item.amt ? item.amt : 0;
            const itemQuantity = item.quantity ? item.quantity : 1;
            return total + itemAmount * itemQuantity;
        }, 0);
    };

    const calculateTax = (total) => {
        const taxRate = 0.15;
        return total * taxRate;
    };

    const totalAmount = calculateTotal();
    const tax = calculateTax(totalAmount);
    const grandTotal = totalAmount + tax;

    return (
        <div className="smallcontainer cartpage">
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Sub Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <div className="cart-info">
                                    <img src={item.img} alt={item.prod_name} />
                                    <div>
                                        <p>{item.prod_name}</p>
                                        <small>Price: ${item.amt ? item.amt.toFixed(2) : "0.00"}</small>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <button onClick={() => decreaseQuantity(index)} className="btn3">-</button>
                                {item.quantity ? item.quantity : 1}
                                <button onClick={() => increaseQuantity(index)} className="btn3">+</button>
                            </td>
                            <td>${(item.amt && item.quantity ? (item.amt * item.quantity).toFixed(2) : "0.00")}</td>
                            <td>
                                <button onClick={() => removeFromCart(index)} className="btn">Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="total">
                <table>
                    <tbody>
                        <tr>
                            <td>Subtotal</td>
                            <td>${totalAmount.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td>${tax.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>${grandTotal.toFixed(2)}</td>
                        </tr>
                        <tr><button className="btn">Buy Now</button></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Cart;
