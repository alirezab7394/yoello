import React from "react";
import { ReactComponent as Coffee } from "../../assets/svg/coffee.svg";
import { ReactComponent as Discount } from "../../assets/svg/discout.svg";
import { ReactComponent as Search } from "../../assets/svg/search.svg";
import { ReactComponent as Restaurant } from "../../assets/svg/spoon-knife.svg";
import Tabs from "../widget/tabs/Tabs";
import DrinkMenu from "./drink/DrinkMenu";
export default function Menu() {
  // list of main tabs
  let tabsList = [
    { label: "No Idea", Icon: Coffee, content: <DrinkMenu /> },
    { label: "No Idea", Icon: Restaurant, content: <div>test 2</div> },
    { label: "Discount", Icon: Discount, content: <div>test 3</div> },
    { label: "Search", Icon: Search, content: <div>test 4</div> },
  ];
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Tabs list={tabsList} />
    </div>
  );
}
