import { call, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  setUserProducts,
  fetchUserProductsRequest,
} from "../slices/userProSlice";

// Function to fetch user products from the JSON file
const fetchUserProducts = async () => {
  const response = await fetch(`${process.env.PUBLIC_URL}/UserPro.json`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Worker saga to handle fetching products
function* handleFetchUserProducts() {
  try {
    const products: any[] = yield call(fetchUserProducts);
    yield put(setUserProducts(products));
    console.log("User products loaded via saga");
  } catch (error) {
    console.error("Error fetching user products:", error);
    // You can dispatch an error action here if needed
  }
}

// Watcher saga to listen for fetchUserProductsRequest
function* watchUserProSaga() {
  yield takeEvery(fetchUserProductsRequest.type, handleFetchUserProducts);
}

export default watchUserProSaga;
