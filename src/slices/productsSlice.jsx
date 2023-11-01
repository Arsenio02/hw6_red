import { createSlice } from '@reduxjs/toolkit';
import productsData from '../components/products.json';

const productsSlice = createSlice({
    name: 'products',
    initialState: productsData,
});

export default productsSlice.reducer;
