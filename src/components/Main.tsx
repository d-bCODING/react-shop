import React from "react";
import ItemList from "./part/ItemList";
import Header from "./part/Header";
import Footer from "./part/Footer";
import Slide from "./part/Slide";

export default function Main() {
  return (
    <>
      <Header></Header>
      <Slide></Slide>
      <ItemList sort={""} category="fashion"></ItemList>
      <ItemList sort={""} category="accessory"></ItemList>
      <ItemList sort={""} category="digital"></ItemList>
      <Footer></Footer>
    </>
  );
}
