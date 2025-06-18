import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  title: string;
  description: string;
  size: string;
  cost: string;
  image: string;
}

interface UserProState {
  products: Product[];
}

const initialState: UserProState = {
  products: [],
};

const userProSlice = createSlice({
  name: "userPro",
  initialState,
  reducers: {
    fetchUserProductsRequest() {}, // Triggers saga
    setUserProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    addUserProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload);
    },
    removeUserProduct(state, action: PayloadAction<number>) {
      state.products.splice(action.payload, 1);
    },
    clearUserProducts(state) {
      state.products = [];
    },
  },
});

export const {
  fetchUserProductsRequest,
  setUserProducts,
  addUserProduct,
  removeUserProduct,
  clearUserProducts,
} = userProSlice.actions;

export default userProSlice.reducer;
