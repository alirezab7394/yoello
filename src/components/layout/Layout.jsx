import React from "react";
import Header from "../header/Header";
import Menu from "../menu/Menu";
import "./Layout.scss";
import SelectedCard from "../card/SelectedCard";
import Cart from "../cart/Cart";

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <Menu />
      <Cart />
      <SelectedCard />
    </div>
  );
}
