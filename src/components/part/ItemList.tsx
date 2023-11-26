import React from "react";
import { db } from "../../mock/db";
import styled from "styled-components";
import { Link } from "react-router-dom";



//아이템 리스트 나열하는 컴포넌트
const ItemList: React.FC<{ sort: string; category: string }> = (props) => {
  // 상품별 카테고리 이름 설정
  let title = "";
  switch (props.category) {
    case "fashion":
      title = "패션";
      break;
    case "accessory":
      title = "악세서리";
      break;
    case "digital":
      title = "디지털";
      break;
  }

  //mock 데이터 중 props로 받아온 카테고리와 일치하는 것들만 저장
  const items = db.filter((item) => {
    return item.category === props.category;
  });

  //4개만 보여줄지, 전체 다 보여줄지 판별하는 flag
  let count = 4;
  if (props.sort === "complex") {
    count = items.length;
  }

  //개수가 정해진 아이템 리스트
  const showedItem = [];
  for (let i = 0; i < count; i++) {
    showedItem.push(items[i]);
  }

  return (
    <>
      <Section>
        <div className="inner">
          {props.sort === "complex" && (
            <p className="category">홈 &gt; {title}</p>
          )}
          <h3>{title}</h3>
          <ul>
            {showedItem.map((el) => (
              <li key={el.id}>
                <Link to={`/product/${el.id}`}>
                  <div className="img-container">
                    <img src={el.src} alt="상품 이미지" />
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
        </div>
      </Section>
    </>
  );
};

export default ItemList;

const Section = styled.section`
  height: auto;
  min-height: 100%;
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
    h3 {
      display: flex;
      justify-content: center;
      font-size: 36px;
      font-weight: 700;
    }
    ul {
      margin-top: 20px;
      gap: 18.6px;
      display: flex;
      flex-wrap: wrap;
      li {
        a {
          color: black;
          text-decoration: none;
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