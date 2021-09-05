import React from "react";
import "./Card.css";

export const Card = ({
  idx,
  cardValue,
  selection,
  setSelection,
  isDisabled,
}) => {
  return (
    <div
      className="card"
      onClick={() => {
        if (!isDisabled[idx]) {
          if (selection.card1 === null) {
            setSelection({ card1: idx, card2: null });
            isDisabled[idx] = true;
          } else if (selection.card1 !== idx) {
            setSelection({ card1: selection.card1, card2: idx });
            isDisabled[idx] = true;
          }
        }
      }}
    >
      <h1
        className="cardName"
        id={"cardName_" + idx}
        style={{ display: isDisabled[idx] ? "block" : "none" }}
      >
        {cardValue}
      </h1>
    </div>
  );
};
