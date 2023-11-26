import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Fashion from "./components/Fashion";
import Accessory from "./components/Accessory";
import Digital from "./components/Digital";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import Product1 from "./components/product/Product1";
import Product2 from "./components/product/Product2";
import Product3 from "./components/product/Product3";
import Product4 from "./components/product/Product4";
import Product5 from "./components/product/Product5";
import Product6 from "./components/product/Product6";
import Product7 from "./components/product/Product7";
import Product8 from "./components/product/Product8";
import Product9 from "./components/product/Product9";
import Product10 from "./components/product/Product10";
import Product11 from "./components/product/Product11";
import Product12 from "./components/product/Product12";
import Product13 from "./components/product/Product13";
import Product14 from "./components/product/Product14";
import Product15 from "./components/product/Product15";
import Product16 from "./components/product/Product16";
import Product17 from "./components/product/Product17";
import Product18 from "./components/product/Product18";
import Product19 from "./components/product/Product19";
import Product20 from "./components/product/Product20";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />}></Route>
        <Route path={"/fashion"} element={<Fashion />}></Route>
        <Route path={"/accessory"} element={<Accessory />}></Route>
        <Route path={"/digital"} element={<Digital />}></Route>
        <Route path={"/cart"} element={<Cart />}></Route>
        <Route path={"/product/1"} element={<Product1 />}></Route>
        <Route path={"/product/2"} element={<Product2 />}></Route>
        <Route path={"/product/3"} element={<Product3 />}></Route>
        <Route path={"/product/4"} element={<Product4 />}></Route>
        <Route path={"/product/5"} element={<Product5 />}></Route>
        <Route path={"/product/6"} element={<Product6 />}></Route>
        <Route path={"/product/7"} element={<Product7 />}></Route>
        <Route path={"/product/8"} element={<Product8 />}></Route>
        <Route path={"/product/9"} element={<Product9 />}></Route>
        <Route path={"/product/10"} element={<Product10 />}></Route>
        <Route path={"/product/11"} element={<Product11 />}></Route>
        <Route path={"/product/12"} element={<Product12 />}></Route>
        <Route path={"/product/13"} element={<Product13 />}></Route>
        <Route path={"/product/14"} element={<Product14 />}></Route>
        <Route path={"/product/15"} element={<Product15 />}></Route>
        <Route path={"/product/16"} element={<Product16 />}></Route>
        <Route path={"/product/17"} element={<Product17 />}></Route>
        <Route path={"/product/18"} element={<Product18 />}></Route>
        <Route path={"/product/19"} element={<Product19 />}></Route>
        <Route path={"/product/20"} element={<Product20 />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
