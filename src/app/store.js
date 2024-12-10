import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '../features/categories/categoriesSlice'
import productsReducer from '../features/products/productsSlice'
import cartReducer from '../features/cart/cartSlice'

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
  },
})

export default store
