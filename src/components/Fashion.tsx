import React from "react";
import Header from "./part/Header";
import Footer from "./part/Footer";
import ItemList from "./part/ItemList";

export default function Fashion() {
  return (
    <>
      <Header></Header>
      <ItemList sort="complex" category="fashion"></ItemList>
      <Footer></Footer>
    </>
  );
}
