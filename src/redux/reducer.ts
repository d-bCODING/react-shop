import { createStore } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// rootReducer
export const cartListReducer = (currentState, action) => {
  console.log(action);
  
  if (currentState === undefined) {
    return {
      cartList: [],
    };
  }
  const newState = { ...currentState };

  if (action.type === "add") {
    newState.cartList = [...newState.cartList, {
      productPrice: Number(action.productPrice),
      productTitle: action.productTitle,
    }];
    return newState;
  }
  if (action.type === "minus") {
    newState.cartList = newState.cartList.filter(obj => obj.productTitle !== action.productTitle);
    return newState;
  }
  if (action.type === "removeAll") {
    newState.cartList = [];
    alert("결제 완료");
    return newState;
  }
};

export const store2 = createStore(cartListReducer)