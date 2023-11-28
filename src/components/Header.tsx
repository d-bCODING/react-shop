import { useEffect } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



export default function Header() {

  const cartList = useSelector(state => state)
  console.log(cartList);
  

  const cartItem = JSON.parse(localStorage.getItem("cart") || "[]");
  useEffect(() => {}, [cartItem]);
  return (
    <HeaderPart>
      <div className="inner">
        <nav>
          <h1>
            <Link to="/">React Shop</Link>
          </h1>
          <ol>
            <Link to="/clothing">패션</Link>
            <Link to="/jewelery">액세서리</Link>
            <Link to="/electronics">디지털</Link>
          </ol>
        </nav>
        <div className="user">
          <i>
            <svg
              className="swap-on fill-black w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"></path>
            </svg>
          </i>
          <input type="text" placeholder="검색" />
          <Link to="/cart">
            <span>{cartItem.length}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-gray-700 dark:stroke-white"
              fill="black"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </HeaderPart>
  );
}

const HeaderPart = styled.header`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  width: 100%;
  height: 64px;
  padding: 8px;
  box-sizing: border-box;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  .inner {
    width: 1328px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-wrap: wrap;
    nav {
      display: flex;
      align-items: center;
      a {
        font-weight: 700;
        text-decoration: none;
        color: black;
      }
      h1 {
        display: inline-block;
        a {
          font-size: 18px;
          margin-right: 12px;
        }
      }
      ol {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        a {
          transition: all 0.2s;
          border-radius: 10px;
          display: inline-block;
          padding: 8px 12px;
          font-size: 14px;
          &:hover {
            background-color: gray;
          }
        }
      }
    }
    .user {
      display: flex;
      align-items: center;
      height: 46px;
      gap: 10px;
      i {
        width: 30px;
        height: 30px;
      }
      input {
        background-color: #d1d5db;
        border-radius: 5px;
        border: none;
        width: 215px;
        height: 100%;
        padding: 0 16px;
      }
      a {
        position: relative;
        text-decoration: none;
        display: inline-block;
        width: 35px;
        height: 35px;
        span {
          display: inline-block;
          width: 20px;
          height: 20px;
          background-color: red;
          border-radius: 50%;
          text-align: center;
          line-height: 20px;
          position: absolute;
          right: -3px;
          color: black;
          font-size: 14px;
          color: white;
        }
      }
    }
  }
`;