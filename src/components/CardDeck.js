import React, { useState, useEffect } from "react";
import "./CardDeck.css";
import { Card } from "./Card";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const identifiers = ["A", "B", "C", "D", "E", "F", "G", "H"];
const cardIdentifiers = shuffle([...identifiers, ...identifiers]);
const isDisabled = cardIdentifiers.map((element) => false);

function reset(idx1, idx2) {
  isDisabled[idx1] = false;
  isDisabled[idx2] = false;
}

export const CardDeck = (props) => {
  const { attempts, setAttempts } = props;
  const { matches, setMatches } = props;

  const [selection, setSelection] = useState({ card1: null, card2: null });

  useEffect(() => {
    if (selection.card1 !== null && selection.card2 !== null) {
      if (
        cardIdentifiers[selection.card1] === cardIdentifiers[selection.card2]
      ) {
        setMatches(matches + 1);
        setAttempts(attempts + 1);
      } else {
        setAttempts(attempts + 1);
        reset(selection.card1, selection.card2);
      }
      setSelection({ card1: null, card2: null });
    }
  }, [
    selection.card1,
    selection.card2,
    setMatches,
    matches,
    setAttempts,
    attempts,
  ]);

  return (
    <div className="grid">
      {cardIdentifiers.map((element, idx) => {
        return (
          <Card
            key={idx}
            idx={idx}
            isDisabled={isDisabled}
            cardValue={element}
            setSelection={setSelection}
            selection={selection}
          />
        );
      })}
    </div>
  );
};
