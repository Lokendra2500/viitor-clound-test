import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_PRODUCT,
} from "../constants/types";

// add product action
export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  paylaod: product
});