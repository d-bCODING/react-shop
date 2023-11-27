import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Cart from "./components/Cart";
import SortedProductPage from "./pages/SortedProductPage";
import ProductMorePage from "./pages/ProductMorePage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />}/>
        <Route path={"/:type"} element={<SortedProductPage />}/>
        <Route path={"/:type/:id"} element={<ProductMorePage />}/>
        <Route path={"/cart"} element={<Cart />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
