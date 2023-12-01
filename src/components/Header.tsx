import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isDarkState } from "../recoil/atom";
import { ThemeObj } from "../theme/theme";

interface cartListObj {
  cartList: []
}

interface products {
  id: number
  category: string
  image: string
  title: string
  price: number
}

interface nowTheme {
  bgColor: string
  textColor: string
}

const Header = () => {
  const navigate = useNavigate();
  const cartList = useSelector((state: cartListObj) => state.cartList);
  const [products, setProducts] = useState<products[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<products[]>([]);
  const [input, setInput] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [isDark, setIsDark] = useRecoilState(isDarkState)

  let nowTheme = {
    bgColor: '',
    textColor: '',
  }
  if (isDark) {
    nowTheme = ThemeObj.darkTheme
    document.body.style.backgroundColor = '#191919';
  } else {
    nowTheme = ThemeObj.whiteTheme
    document.body.style.backgroundColor = 'white';
  }

  const getAllProducts = async () => {
    try {
      const response1 = await fetch(`https://fakestoreapi.com/products`);
      const data = await response1.json()
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  const goToProductMore = (productType: string, productId: number) => {
    if (productType.includes('clothing')) {
      productType = 'clothing';
    }
    navigate(`/${productType}/${productId}`);
  }

  if (searchOpen) {
    window.addEventListener('click', () => setSearchOpen(false))
  }

  useEffect(() => {
    getAllProducts();
  }, [])

  useEffect(() => {
    setFilteredProducts(products.filter(obj => obj.title.toLowerCase().includes(input.toLowerCase())));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input])

  return (
    <HeaderPart nowtheme={nowTheme}>
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
          <button className="theme-btn" onClick={() => setIsDark(!isDark)}>
            <i>
              {!isDark ?
                <svg
                  className="swap-on fill-black w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"></path>
                </svg> :
                <svg className="swap-off fill-white w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"></path>
                </svg>
              }
            </i>
          </button>
          <div className="input-div">
            <input type="text" placeholder="검색" onChange={e => { setInput(e.target.value), setSearchOpen(true) }} />
            {filteredProducts.length > 0 && input.length > 0 && searchOpen &&
              <ol>
                {filteredProducts.map(el => (
                  <li key={el.id}>
                    <button onClick={() => goToProductMore(el.category, el.id)}>{el.title}</button>
                  </li>
                ))}
              </ol>
            }
          </div>
          <Link to="/cart">
            <span>{cartList.length}</span>
            {!isDark ? <svg
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
            </svg> : <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-gray-700 dark:stroke-white"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>}

          </Link>
        </div>
      </div>
    </HeaderPart>
  );
}

export default Header;

const HeaderPart = styled.header<{ nowtheme: nowTheme }>`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  color: ${(props) => props.nowtheme.textColor};
  background-color: ${(props) => props.nowtheme.bgColor};
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
      }
      h1 {
        display: inline-block;
        a {
          color: ${props => props.nowtheme.textColor};
          font-size: 18px;
          margin-right: 12px;
        }
      }
      ol {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        a {
          color: ${(props) => props.nowtheme.textColor};
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
      .theme-btn{
        border: none;
        background-color: transparent;
        width: 30px;
        height: 30px;
        padding: 0;
        cursor: pointer;
        i {
          width: 100%;
          height: 100%;
          .fill-white{
            fill: white;
          }
        }
      }
      .input-div {
        position: relative;
        width: 230px;
        height: 100%;
        box-sizing: content-box;
        padding: 0 16px;
        input{
          width: 100%;
          height: 100%;
          background-color: #d1d5db;
          border-radius: 5px;
          border: none;
          padding: 0 16px;
          outline: none;
          box-sizing: border-box;
        }
        ol{
          position: absolute;
          left: 16px;
          top: 43px;
          width: 230px;
          max-height: 200px;
          border-radius: 0 0 5px 5px;
          background-color: white;
          overflow: auto;
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
          &::-webkit-scrollbar{
            /* display: none; */
          }
          li{
            &:hover{
              background-color: #ececec;
            }
            button{
              padding: 16px 16px;
              border: none;
              background-color: transparent;
              width: 100%;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
     
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