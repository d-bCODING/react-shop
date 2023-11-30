import { createStore } from "redux";
// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";

interface product {
  producId: number
  productPrice: number
  productTitle: string
}

// rootReducer
export const cartListReducer = (currentState, action) => {
  if (currentState === undefined) {
    return {
      cartList: [],
    };
  }
  const newState = { ...currentState };

  if (action.type === "add") {
    newState.cartList = [...newState.cartList, {
      productId: Number(action.productId),
      productTitle: action.productTitle,
      productPrice: Number(action.productPrice),
    }];
    return newState;
  }
  if (action.type === "minus") {
    newState.cartList = newState.cartList.filter((obj:product) => obj.productTitle !== action.productTitle);
    return newState;
  }
  if (action.type === "removeAll") {
    newState.cartList = [];
    alert("결제 완료");
    return newState;
  }
};

export const store2 = createStore(cartListReducer)