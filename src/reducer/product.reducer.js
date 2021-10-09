import shortid from 'shortid';
import {ADD_PRODUCT,
  DELETE_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_PRODUCT } from '../constants/types'

const initialState = {
  products: [
    {
      id: shortid.generate(),
      name: "Product 1",
      price: 100,
      qty: 10,
      desc: "Test description",
    },
  ],
  cart: []
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products]
      }
    case ADD_TO_CART:
      return {
        ...state,
        cart: [action.payload, ...state.cart]
      }

    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((item) => 
          item.id === action.payload.id ? action.payload : item
        )
      }
    default:
      return state;
  }
};