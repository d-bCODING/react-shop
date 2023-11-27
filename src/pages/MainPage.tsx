import ItemList from "../components/part/ItemList";
import Header from "../components/part/Header";
import Footer from "../components/part/Footer";
import Slide from "../components/part/Slide";

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