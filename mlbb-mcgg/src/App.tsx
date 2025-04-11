import { useState } from "react";
import EnemyList from "./components/EnemyList";
import SpellTimer from "./components/SpellTimer";
import "./App.css";
import TopBar from "./components/TopBar";

type Site ={
  siteName: string;
}

function App() {
  const [currentSite, setCurrentSite] = useState<Site>({siteName:"MCGG"});
  
  function changeCurrentSite(siteName:string):void{
    setCurrentSite({siteName:siteName})
  }

  return (
    <>
      <div className="header-container">
        <TopBar changeSite={changeCurrentSite}/>
        <h1>{currentSite.siteName} Helper</h1>
        <div className="header__right-spacer"></div>
      </div>

      {currentSite.siteName === "MCGG" ? <EnemyList/> : null}


      
    </>
  );
}

export default App;
