import ItemList from "../components/ItemList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slide from "../components/Slide";

const MainPage = () => {
  return (
    <>
      <Header></Header>
      <Slide></Slide>
      <ItemList sort={""} category="clothing"></ItemList>
      <ItemList sort={""} category="jewelery"></ItemList>
      <ItemList sort={""} category="electronics"></ItemList>
      <Footer></Footer>
    </>
  );
}

export default MainPage;