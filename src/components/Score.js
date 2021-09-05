import React from "react";

export const Score = (props) => {
  const { attempts, matches } = props;
  return (
    <div>
      <h3>Attempts : {attempts}</h3>
      <h3>Matches : {matches}</h3>
    </div>
  );
};
