import { createStore } from "redux";
// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";

interface productType {
  productId: number;
  productPrice: number;
  productTitle: string;
}

interface actionType {
  productId: number;
  productPrice: number;
  productTitle: string;
  type: string;
}

// interface curObj {
//   cartList: productType[];
// }

// rootReducer
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const cartListReducer = (currentState: any, action:actionType) => {
  if (currentState === undefined) {
    return {
      cartList: [],
    };
  }
  const newState = { ...currentState };

  if (action.type === "add") {
    if (newState.cartList.some((obj:productType) => obj.productId === action.productId)) {
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
      (obj: productType) => obj.productTitle !== action.productTitle
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
