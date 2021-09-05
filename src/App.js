import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header";
import { Score } from "./components/Score";
import { CardDeck } from "./components/CardDeck";

window.onbeforeunload = (event) => {
  const e = event || window.event;
  e.preventDefault();
  if (e) {
    e.returnValue = "";
  }
  return "";
};

function App() {
  const [attempts, setAttempts] = useState(0);
  const [matches, setMatches] = useState(0);
  return (
    <div className="App">
      <Header />
      <Score attempts={attempts} matches={matches} />
      <CardDeck
        attempts={attempts}
        setAttempts={setAttempts}
        matches={matches}
        setMatches={setMatches}
      />
    </div>
  );
}

export default App;
