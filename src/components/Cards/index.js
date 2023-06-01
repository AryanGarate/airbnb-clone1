import React from "react";
import Card from "./card";
import "./styles.css";
import { list } from "../../assets/cards-list";
function Cards({ list2 }) {
  return (
    <div className="cards-flex">
      {list.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  );
}

export default Cards;
