import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../slices/cartSlice';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
    };

    return (
        <div>
            <h2>Корзина</h2>
            {cart.map(item => (
                <div key={item.id}>
                    <p>{item.name} - {item.price} руб.</p>
                    <button onClick={() => handleRemoveFromCart(item)}>Удалить</button>
                </div>
            ))}
        </div>
    );
};

export default Cart;
