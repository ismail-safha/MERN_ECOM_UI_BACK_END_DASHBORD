import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import customerSlice from "../features/customers/customerSlice";
import productReducer from "../features/product/productSlice";
import brandReducer from "../features/brand/brandSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerSlice,
    product: productReducer,
    brand: brandReducer,
  },
});
