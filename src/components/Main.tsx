import ItemList from "./part/ItemList";
import Header from "./part/Header";
import Footer from "./part/Footer";
import Slide from "./part/Slide";

export default function Main() {
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
