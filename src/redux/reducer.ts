import { createStore } from "redux";
// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";

interface product {
  productId: number;
  productPrice: number;
  productTitle: string;
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
    console.log(newState);
    
    if (newState.cartList.some((obj:product) => obj.productId === action.productId)) {
      alert("이미 장바구니에 담긴 상품입니다.");
      return newState;
    }
    newState.cartList = [
      ...newState.cartList,
      {
        productId: Number(action.productId),
        productTitle: action.productTitle,
        productPrice: Number(action.productPrice),
      },
    ];
    alert("장바구니에 담겼습니다.");
    return newState;
  }
  if (action.type === "minus") {
    newState.cartList = newState.cartList.filter(
      (obj: product) => obj.productTitle !== action.productTitle
    );
    return newState;
  }
  if (action.type === "removeAll") {
    newState.cartList = [];
    alert("결제 완료");
    return newState;
  }
};

export const store2 = createStore(cartListReducer);
