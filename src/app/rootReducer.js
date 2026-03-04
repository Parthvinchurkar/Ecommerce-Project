import { combineReducers } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'
import productReducer from '../features/products/productSlice'
import authReducer from '../features/auth/authSlice'

export default combineReducers({
  cart: cartReducer,
  products: productReducer,
  auth: authReducer,
})