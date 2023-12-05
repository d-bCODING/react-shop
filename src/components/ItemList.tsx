import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isDarkState } from "../recoil/atom";
import { ThemeObj } from "../theme/theme";
import loading from "../img/loading.png"

interface products {
  id: number
  image: string
  title: string
  price: number
}

interface nowTheme {
  bgColor: string
  textColor: string
}

//아이템 리스트 나열하는 컴포넌트
const ItemList: React.FC<{ sort: string; category: string }> = (props) => {
  const [products, setProducts] = useState<products[]>([]);
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

  let productsType = useParams().type
  if (productsType === undefined) {
    productsType = props.category
  }

  // 상품별 카테고리 이름 설정
  let title = "";
  switch (props.category) {
    case "clothing":
      title = "패션";
      break;
    case "jewelery":
      title = "악세서리";
      break;
    case "electronics":
      title = "디지털";
      break;
  }

  const getAllProducts = async () => {
    let data = [];
    try {
      if (productsType === 'clothing') {
        const response1 = await fetch(`https://fakestoreapi.com/products/category/men's clothing`);
        const response2 = await fetch(`https://fakestoreapi.com/products/category/women's clothing`);
        const data1 = await response1.json()
        const data2 = await response2.json()
        data = data1.concat(data2);
        setProducts(data);
        return;
      }
      const response = await fetch(`https://fakestoreapi.com/products/category/${productsType}`);
      data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  const getFourProducts = async () => {
    let data = [];
    try {
      if (productsType === 'clothing') {
        const response1 = await fetch(`https://fakestoreapi.com/products/category/men's clothing?limit=4`);
        const data = await response1.json()
        setProducts(data);
        return;
      }
      const response = await fetch(`https://fakestoreapi.com/products/category/${productsType}?limit=4`);
      data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setProducts([]);
    if (props.sort === 'complex') {
      getAllProducts();
    } else {
      getFourProducts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsType])

  return (
    <>
      <Section nowtheme={nowTheme} className="content">
        <div className="inner">
          {props.sort === "complex" && (
            <p className="category">홈 &gt; {title}</p>
          )}
          <h3>{title}</h3>

          {products.length === 0 &&
            <div className="loading-box">
              <img src={loading} alt="loading..." className="loading" />
            </div>
          }
          {products && (
            <ul>
              {products.map((el) => (
                <li key={el.id}>
                  <Link to={`/${productsType}/${el.id}`}>
                    <div className="img-container">
                      <img src={el.image} alt="상품 이미지" />
                    </div>
                    <div className="description">
                      <div>
                        <p>{el.title}</p>
                        <p>{`$${el.price}`}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}

        </div>
      </Section>
    </>
  );
};

export default ItemList;

const Section = styled.section<{ nowtheme: nowTheme }>`
  height: auto;
  min-height: 100%;
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
    h3 {
      color: ${props => props.nowtheme.textColor};
      display: flex;
      justify-content: center;
      font-size: 36px;
      font-weight: 700;
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
    ul {
      margin-top: 40px;
      gap: 18.6px;
      display: flex;
      flex-wrap: wrap;
      li {
        a {
          color: black;
          text-decoration: none;
          .img-container{
            border-radius : 10px 10px 0 0;
            background-color: white;
          }
        }
        &:hover {
          div:first-child {
            img {
              transition: all 0.3s;
              width: 140px;
              height: 180px;
            }
          }
        }
        border-radius: 10px 10px 10px 10px;
        border: 1px solid gray;
        box-sizing: border-box;
        width: 318px;
        height: 478px;
        .img-container {
          border-radius: 10px 10px 10px 10px;
          display: flex;
          justify-content: center;
          align-content: center;
          flex-wrap: wrap;
          width: 100%;
          height: 320px;
          img {
            width: 120px;
            height: 160px;
          }
        }
        .description {
          border-radius: 0 0 10px 10px;
          display: block;
          width: 100%;
          height: 156px;
          background-color: #f3f4f6;
          padding: 32px;
          box-sizing: border-box;
          div {
            p {
              width: 100%;
              &:first-child {
                margin-bottom: 30px;
                font-weight: 600;
              }
            }
          }
        }
      }
    }
  }
`;