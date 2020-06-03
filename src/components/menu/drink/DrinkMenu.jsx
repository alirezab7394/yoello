import React, { useEffect } from "react";
import InnerTab from "../../widget/tabs/InnerTab";
import Gallery from "../../gallery/Gallery";

export default function DrinkMenu() {
  let tabsList = [
    { label: "All", content: <Gallery link="/beers" /> },
    { label: "Pizza", content: <Gallery link="/beers?food=pizza" /> },
    { label: "Steak", content: <Gallery link="/beers?food=steak" /> },
  ];
  useEffect(() => {}, []);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <InnerTab list={tabsList} swipe />
    </div>
  );
}
