import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cart = useSelector(state => state.cart);

    return (
        <div>
            <h1>Магазин</h1>
            <p>Товаров в корзине: {cart.length}</p>
        </div>
    );
};

export default Navbar;
