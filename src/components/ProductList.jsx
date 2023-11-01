import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';

const ProductList = () => {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Список товаров</h2>
            {products.map(product => (
                <div key={product.id}> {/* Добавлен ключ 'key' */}
                    <p>{product.name} - {product.price} руб.</p>
                    <button onClick={() => dispatch(addToCart(product))}>Купить</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
