import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRecoilValue } from "recoil";
import { isDarkState } from "../recoil/atom";
import { ThemeObj } from "../theme/theme";
import loading from "../img/loading.png"

interface product {
  id: number
  title: string
  image: string
  description: string
  price: number
  rating: {
    rate: number
    count: number
  }
}

interface nowTheme {
  bgColor: string
  textColor: string
}

const ProductsMorePage = () => {
  const { type: prductType, id: productId } = useParams()
  const [product, setProduct] = useState<product>()
  const isDark = useRecoilValue(isDarkState);
  let nowTheme = {
    bgColor: '',
    textColor: '',
  }
  if (isDark) {
    nowTheme = ThemeObj.darkTheme
  } else {
    nowTheme = ThemeObj.whiteTheme
  }

  const dispatch = useDispatch();

  const getProductInfo = async () => {
    let data = [];
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  }

  const addCartList = (id: number, title: string, price: number) => {
    dispatch({
      type: 'add',
      productId: id,
      productTitle: title,
      productPrice: price,
    })
  };

  useEffect(() => {
    getProductInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId])

  return (
    <>
      <Header />
      <Section nowtheme={nowTheme} className="content">
        {product ? (
          <div className="inner">
            <p className="category">
              {prductType} &gt; {product.title}
            </p>
            <div className="product">
              <img src={product.image} alt="상품 이미지" className="img-box" />
              <div className="info">
                <p className="title">{product.title}</p>
                <p className="description">{product.description}</p>
                <div className="score">
                  <ul>
                    {Array.from({ length: Math.round(product.rating.rate) }, () => (
                      <ColoredCircle />
                    ))}
                    {Array.from({ length: 5 - Math.round(product.rating.rate) }, () => (
                      <JustCircle />
                    ))}
                  </ul>
                  <span>{product.rating.rate} / {product.rating.count}명 참여</span>
                </div>
                <p className="price">${product.price}</p>
                <div className="link">
                  <button onClick={() => addCartList(product.id, product.title, product.price)}>장바구니에 담기</button>
                  <Link to="/cart">장바구니로 이동</Link>
                </div>
              </div>
            </div>
          </div>
        ) :
          <div className="loading-box">
            <img src={loading} alt="loading..." className="loading" />
          </div>
        }
      </Section>
      <Footer />
    </>
  );
}

export default ProductsMorePage;

const Section = styled.section<{ nowtheme: nowTheme }>`
  margin-top: 80px;
  .inner {
    width: 1328px;
    margin: 0 auto;
    .category {
      color: ${props => props.nowtheme.textColor};
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
        max-width: 360px;
        height: 100%;
        background-size: cover;
      }
      .info {
        color: ${props => props.nowtheme.textColor};
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
  .loading-box{
      display: flex;
      justify-content: center;
      align-content: center;
      .loading{
        color: ${props => props.nowtheme.textColor};
        margin-top: 40px;
      }
    }
`;

const ColoredCircle = styled.li`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: teal;
`
const JustCircle = styled.li`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #acacac;
`