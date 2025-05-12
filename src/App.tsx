import { useState } from "react";
import EnemyList from "./components/EnemyList";
import SpellTimer from "./components/SpellTimer";
import "./App.css";
import TopBar from "./components/TopBar";

function App() {
  const [currentSite, setCurrentSite] = useState<string>("MCGG");

  return (
    <>
      <TopBar currentSite={currentSite} setCurrentSite={setCurrentSite}  />
      {currentSite === "MCGG" ? <EnemyList /> : null}
      {currentSite === "MLBB" ? <SpellTimer /> : null}
    </>
  );
}

export default App;
