import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { cartListReducer } from "./reducer";

const persistConfig = {
    key: "cartList",
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, cartListReducer);

   export const store = createStore(persistedReducer);
   export const persistor = persistStore(store);
