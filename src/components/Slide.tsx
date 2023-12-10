import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import digitalImg from "../img/digital.jpeg"
import jeansImg from "../img/jeans.jpeg"
import groceryImg from "../img/grocery.jpeg"

export default function Slide() {
  const [count, setCount] = useState(1);
  const [transitionTime, setTransitionTime] = useState(500);
  const interval = useRef(1);
  const autoSlideControl = useRef<number>();

  const clickToPrevPage = () => {
    if (interval.current === 0) {
      setTransitionTime(0);
      interval.current = 3;
      setCount(interval.current)
      setTimeout(() => {
        setTransitionTime(500);
        interval.current = 2;
        setCount(interval.current)
      });
      return;
    }
    interval.current--;
    setCount(interval.current);
  };

  const clickToNextPage = () => {
    if (interval.current === 4) {
      setTransitionTime(0);
      interval.current = 1;
      setCount(interval.current)
      setTimeout(() => {
        setTransitionTime(500);
        interval.current = 2;
        setCount(interval.current)
      });
      return;
    }
    interval.current++;
    setCount(interval.current);
  };

  const autoSlide = () => {
    autoSlideControl.current = setInterval(() => {
      clickToNextPage()
    }, 5000)
  }

  console.log(interval.current);


  useEffect(() => {
    autoSlide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const vw = window.innerWidth - 17;

  return (
    <SlideBanner onMouseEnter={() => { clearInterval(autoSlideControl.current); }} onMouseLeave={autoSlide}>
      <div className="left btn" onClick={clickToPrevPage}>
        ◀
      </div>
      <div className="right btn" onClick={clickToNextPage}>
        ▶
      </div>
      <ul className="dot">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <Viewed count={count} vw={vw} transitionTime={transitionTime}>
        <li className="slide">
          <div className="inner">
            <div>
              <p>신선한 식품!</p>
              <p>농장 직배송으로 더욱 신선한 식료품을 만나보세요.</p>
              <Link to="/undefined">바로가기</Link>
            </div>
          </div>
        </li>
        <li className="slide">
          <div className="inner">
            <div>
              <p>물빠진 청바지!</p>
              <p>이제 막 도착한 패션 청바지를 구경해 보세요.</p>
              <Link to="/clothing">바로가기</Link>
            </div>
          </div>
        </li>
        <li className="slide">
          <div className="inner">
            <div>
              <p>신속한 업무처리</p>
              <p>다양한 디지털 상품을 둘러보세요.</p>
              <Link to="/electronics">바로가기</Link>
            </div>
          </div>
        </li>
        <li className="slide">
          <div className="inner">
            <div>
              <p>신선한 식품!</p>
              <p>농장 직배송으로 더욱 신선한 식료품을 만나보세요.</p>
              <Link to="/undefined">바로가기</Link>
            </div>
          </div>
        </li>
        <li className="slide">
          <div className="inner">
            <div>
              <p>물빠진 청바지!</p>
              <p>이제 막 도착한 패션 청바지를 구경해 보세요.</p>
              <Link to="/clothing">바로가기</Link>
            </div>
          </div>
        </li>
      </Viewed>
    </SlideBanner>
  );
}

const Viewed = styled.ul<{ count: number; vw: number; transitionTime: number }>`
  display: flex;
  height: 100%;
  width: calc((100vw - (100vw - 100%)) * 5);
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
        padding: 20px 60px 20px 20px;
        border-radius: 10px;
        background-color: rgba(46, 46, 46, 0.9);
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
    &:nth-child(2),
    &:nth-child(5) {
      background: url(${jeansImg})
      no-repeat center bottom -500px;
      background-size: cover;
    }
    &:nth-child(3) {
      background: url(${digitalImg})
      no-repeat center bottom -500px;
      background-size: cover;
    }
    &:nth-child(1),
    &:nth-child(4) {
      background: url(${groceryImg})
      no-repeat center bottom -500px;
      background-size: cover;
    }
  }

  transition: all ${(props) => props.transitionTime + "ms"};
  transform: ${(props) => "translateX(-" + Math.round(props.count * props.vw) + "px)"};
`;

const SlideBanner = styled.div`
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
    transition: 200ms;
    &:hover {
      background-color: rgba(61, 61, 61, 0.6);
    }
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
  .dot {
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