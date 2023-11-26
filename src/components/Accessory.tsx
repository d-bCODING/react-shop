import React from "react";
import Header from "./part/Header";
import Footer from "./part/Footer";
import ItemList from "./part/ItemList";

export default function Accessory() {
  return (
    <>
      <Header></Header>
      <ItemList sort="complex" category="accessory"></ItemList>
      <Footer></Footer>
    </>
  );
}
