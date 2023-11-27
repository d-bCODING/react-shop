import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Cart from "./components/Cart";
import SortedProductPage from "./pages/SortedProductPage";
import ProductMorePage from "./pages/ProductMorePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainPage />}/>
        <Route path={"/:type"} element={<SortedProductPage />}/>
        <Route path={"/:type/:id"} element={<ProductMorePage />}/>
        <Route path={"/cart"} element={<Cart />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
