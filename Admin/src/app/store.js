import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import customerSlice from "../features/customers/customerSlice";

export const store = configureStore({
  reducer: { auth: authReducer, customer: customerSlice },
});
