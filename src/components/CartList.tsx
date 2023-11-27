import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const itemCount = localStorage.length;

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

function CartList() {
  const [state, setState] = useState(0);

  const cartItem = JSON.parse(localStorage.getItem("cart") || "[]");
  let sum = 0;
  for (let i = 0; i < cartItem.length; i++) {
    sum += cartItem[i][0].price;
  }

  const removeItem = () => {
    setState(state + 1);
  };

  const removeAll = () => {
    alert(`
      결제 완료 되었습니다!
      
      ※ 삭제 버튼은 구현하지 못했습니다.
    `);
    localStorage.removeItem("cart");
    setState(state + 1);
  };
  return (
    <>
      <Section>
        <div className="inner">
          <p className="category">홈 &gt; 장바구니</p>
          {itemCount === 0 && (
            <div>
              <h2>장바구니에 물품이 없습니다.</h2>
              <Link to="/">담으러 가기</Link>
            </div>
          )}
          {itemCount !== 0 && (
            <>
              <ul className="list">
                {cartItem.map((el: any) => (
                  <>
                    <li key={el[0].id}>
                      <span>{el[0].title}</span>
                      <div>
                        <span>${el[0].price}</span>
                        <button onClick={removeItem}>삭제</button>
                      </div>
                    </li>
                  </>
                ))}
              </ul>
              <div className="sum">
                <p>총 합계액 : ${sum}</p>
                <button onClick={removeAll}>결제하기</button>
              </div>
            </>
          )}
        </div>
      </Section>
    </>
  );
}

export default CartList;
