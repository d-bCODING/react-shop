import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { Link, useParams } from "react-router-dom";

interface product{
  title:string
  image:string
  description:string
  price:number
  rating :{
    rate:number
    count:number
  }
}

const Product= () => {
  const { type: prductType, id: productId } = useParams()
  const [product, setProduct] = useState<product>()

  const getProductInfo = async () => {
    let data = [];
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      data = await response.json();
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProductInfo();
  }, [])

  const setProduct2 = () => {
    alert(
      `
    장바구니에 품목이 담겼습니다
    
    ※ 현재 다른 컴포넌트의 리렌더링을 하는 과정이 미숙해
    해당 부분이 구현되지 않고 새로고침을 눌러야 구현 되고 있습니다`
    );
    const dataArray = JSON.parse(localStorage.getItem("cart") || "[]");
    dataArray.push(item);
    localStorage.setItem("cart", JSON.stringify(dataArray));
  };

  return (
    <>
      {product && (
        <Section src={product.image}>
          <div className="inner">
            <p className="category">
              {prductType} &gt; {product.title}
            </p>
            <div className="product">
              <div className="img-box"></div>
              <div className="info">
                <p className="title">{product.title}</p>
                <p className="description">{product.description}</p>
                <div className="score">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <span>{product.rating.rate} / {product.rating.count}명 참여</span>
                </div>
                <p className="price">${product.price}</p>
                <div className="link">
                  <button onClick={setProduct2}>장바구니에 담기</button>
                  <Link to="/cart">장바구니로 이동</Link>
                </div>
              </div>
            </div>
          </div>
        </Section>
      )}
    </>
  );
};

export default Product;

const Section = styled.section<{ src: string }>`
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
    .product {
      display: flex;
      margin-top: 50px;
      width: 100%;
      height: 320px;
      .img-box {
        width: 500px;
        height: 100%;
        background: ${(props) =>
    `url(${props.src}) no-repeat center center / 210px 288px`};
      }
      .info {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 48px 48px 32px 48px;
        .title {
          font-size: 20px;
          font-weight: 600;
        }
        .score {
          display: flex;
          align-items: center;
          ul {
            display: flex;
            gap: 5px;
            margin-right: 10px;
            li {
              border-radius: 50%;
              width: 20px;
              height: 20px;
              background-color: teal;
              &:last-child {
                background-color: #acacac;
              }
            }
          }
        }
        .price {
          font-size: 30px;
        }
        .link {
          display: flex;
          gap: 10px;
          align-items: center;
          button {
            cursor: pointer;
            width: 128px;
            height: 48px;
            background-color: #570df8;
            border: none;
            border-radius: 10px;
            color: white;
            font-weight: 600;
            font-size: 14px;
          }
          a {
            color: black;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
            border-radius: 10px;
            display: inline-block;
            width: 128px;
            height: 48px;
            background-color: white;
            border: 1px solid black;
            text-align: center;
            line-height: 48px;
          }
        }
      }
    }
  }
`;