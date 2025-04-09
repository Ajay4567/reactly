import React, { useState, useEffect } from "react";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch orders from API or local storage
        const mockOrders = [
            { id: 1, product: "Dog Food", price: "$20", status: "Delivered" },
            { id: 2, product: "Cat Toy", price: "$10", status: "Shipped" }
        ];
        setOrders(mockOrders);
    }, []);

    return (
        <div className="orders-container">
            <h2>My Orders</h2>
            {orders.length === 0 ? (
                <p>No orders yet.</p>
            ) : (
                <ul>
                    {orders.map(order => (
                        <li key={order.id}>
                            {order.product} - {order.price} - {order.status}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MyOrders;
