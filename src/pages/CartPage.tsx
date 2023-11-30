import Header from "../components/Header";
import Footer from "../components/Footer";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

interface product {
  productId: number
  productPrice: number
  productTitle: string
}

interface cartListObj {
  cartList: []
}

const CartPage = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state: cartListObj) => state.cartList)

  const totalPrice = cartList.reduce((accumulator: number, obj: product) => accumulator + obj.productPrice, 0);

  const removeItem = (title: string) => {
    dispatch({
      type: 'minus',
      productTitle: title,
    })
  };

  const removeAll = () => {
    dispatch({
      type: 'removeAll',
    })
  };
  return (
    <>
      <Header></Header>
      <Section>
        <div className="inner">
          <p className="category">홈 &gt; 장바구니</p>
          {cartList.length === 0 && (
            <div>
              <h2>장바구니에 물품이 없습니다.</h2>
              <Link to="/">담으러 가기</Link>
            </div>
          )}
          {cartList.length !== 0 && (
            <>
              <ul className="list">
                {cartList.map((el: product) => (
                  <li key={el.productId}>
                    <span>{el.productTitle}</span>
                    <div>
                      <span>${el.productPrice}</span>
                      <button onClick={() => removeItem(el.productTitle)}>삭제</button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="sum">
                <p>총 합계액 : ${totalPrice}</p>
                <button onClick={removeAll}>결제하기</button>
              </div>
            </>
          )}
        </div>
      </Section>
      <Footer></Footer>
    </>
  );
}

export default CartPage

const Section = styled.section`
  margin-top: 80px;
  .inner {
    width: 1328px;
    margin: 0 auto;
    .category {
      height: 50px;
      line-height: 50px;
      font-size: 14px;
      margin: 10px 0px;
    }
    div {
      h2 {
        margin-top: 40px;
        font-size: 24px;
      }
      a {
        margin-top: 40px;
        display: inline-block;
        height: 48px;
        font-size: 14px;
        padding: 0 16px;
        background-color: #570df8;
        text-align: center;
        line-height: 48px;
        text-decoration: none;
        color: white;
        border-radius: 10px;
        font-weight: 600;
      }
    }
    .list {
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 1000px;
        padding: 10px;
        margin-bottom: 10px;
        background-color: teal;
        color: white;
        border-radius: 10px;
        div {
          display: flex;
          align-items: center;
          gap: 20px;
        }
      }
    }
    .sum {
      margin-top: 50px;
      p {
        font-size: 30px;
      }
      button {
        cursor: pointer;
        margin-top: 30px;
        width: 150px;
        height: 50px;
        background-color: salmon;
        border: none;
        border-radius: 20px;
        font-size: 20px;
        color: white;
        font-weight: 700;
      }
    }
  }
`;