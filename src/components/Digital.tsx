import React from "react";
import Header from "./part/Header";
import Footer from "./part/Footer";
import ItemList from "./part/ItemList";

export default function Digital() {
  return (
    <>
      <Header></Header>
      <ItemList sort="complex" category="digital"></ItemList>
      <Footer></Footer>
    </>
  );
}
