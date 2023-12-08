import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import digitalImg from "../img/digital.jpeg"
import jeansImg from "../img/jeans.jpeg"
import groceryImg from "../img/grocery.jpeg"

export default function Slide() {
  const [count, setCount] = useState(0);
  const interval = useRef(0);

  const downCount = () => {
    if (count === 0) {
      setCount(2);
    } else {
      setCount(count - 1);
    }
  };

  const upCount = () => {
    if (count === 2) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };


  // const autoSlide = setInterval(() => {
  //   upCount();
  // }, 10000)

  // 왜 안될까 ㅠㅠ
  // const stopAutoSlide = () => {
  //   console.log("ㅎㅇ");
  //   clearInterval(autoSlide);
  // }

  //왜 안될까 ㅠㅠ
  // const move = (number) => {
  //   setCount(number);
  // };
  console.log("렌더링 되고 있음");


  useEffect(() => {
    console.log("setInterval 선언");
    const autoSlide = setInterval(() => {
      if (interval.current === 2) {
        setCount(0)
        interval.current = 0;
        return;
      }
      interval.current++;
      console.log("ref", interval.current);
      console.log("state", count);
      setCount(interval.current);
    }, 5000)
  }, [])

  const vw = window.innerWidth - 17;

  return (
    <SlideBanner>
      <div className="left btn" onClick={downCount}>
        ◀
      </div>
      <div className="right btn" onClick={upCount}>
        ▶
      </div>
      <ul className="dot">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <Viewed count={count} vw={vw}>
        <div className="slide">
          <div className="inner">
            <div>
              <p>물빠진 청바지!</p>
              <p>이제 막 도착한 패션 청바지를 구경해 보세요.</p>
              <Link to="/clothing">바로가기</Link>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="inner">
            <div>
              <p>신속한 업무처리</p>
              <p>다양한 디지털 상품을 둘러보세요.</p>
              <Link to="/electronics">바로가기</Link>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="inner">
            <div>
              <p>신선한 식품!</p>
              <p>농장 직배송으로 더욱 신선한 식료품을 만나보세요.</p>
              <Link to="/undefined">바로가기</Link>
            </div>
          </div>
        </div>
      </Viewed>
    </SlideBanner>
  );
}

const Viewed = styled.div<{ count: number; vw: number }>`
  display: flex;
  height: 100%;
  width: calc((100vw - (100vw - 100%)) * 3);
  .slide {
    width: calc(100vw - (100vw - 100%));
    height: 100%;
    .inner {
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      width: 1328px;
      height: 100%;
      margin: 0 auto;
      div {
        background: none;
        margin-left: 40px;
        p {
          color: white;
          &:first-of-type {
            font-size: 36px;
            font-weight: 700;
          }
          &:last-of-type {
            margin: 10px 0px 20px;
          }
        }
        a {
          display: inline-block;
          width: 110px;
          height: 48px;
          padding: 0 16px;
          font-weight: bold;
          background-color: teal;
          color: white;
          font-size: 16px;
          line-height: 48px;
          text-decoration: none;
          border-radius: 10px;

          text-align: center;
          box-sizing: border-box;
        }
      }
    }
    &:nth-child(1) {
      background: url(${digitalImg})
      no-repeat center bottom -500px;
      background-size: cover;
    }
    &:nth-child(2) {
      background: url(${jeansImg})
      no-repeat center bottom -500px;
      background-size: cover;
    }
    &:nth-child(3) {
      background: url(${groceryImg})
      no-repeat center bottom -500px;
      background-size: cover;
    }
  }

  transition: all 0.5s;
  transform: ${(props) => "translateX(-" + Math.round(props.count * props.vw) + "px)"};
`;

const SlideBanner = styled.div`
  :root {
    --scrollbar-with: ;
  }
  position: relative;
  margin-top: 64px;
  height: 700px;
  width: calc(100vw - (100vw - 100%));
  overflow: hidden;
  .btn {
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 100%;
    cursor: pointer;
    color: white;
  }
  .left {
    position: absolute;
    top: 0;
    left: 0;
  }
  .right {
    position: absolute;
    top: 0;
    right: 0;
  }

  ul {
    z-index: 1;
    display: flex;
    gap: 10px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
    li {
      width: 8px;
      height: 8px;
      background-color: white;
      border-radius: 50%;
      opacity: 0.5;
      transition: all 0.5s;
      cursor: pointer;
      &.selected {
        opacity: 1;
      }
    }
  }
`;