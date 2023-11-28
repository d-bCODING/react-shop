import { createStore } from "redux";

const cartListreducer = (currentState, action) => {
  if (currentState === undefined) {
    return {
      cartListCount: 0,
      cartList: [],
    };
  }
  const newState = { ...currentState };

  if (action.type === "add") {
    newState.cartListCount++;
    return newState;
  }

  if (action.type === "minus") {
    newState.cartListCount--;
    return newState;
  }
};

export const store = createStore(cartListreducer);
