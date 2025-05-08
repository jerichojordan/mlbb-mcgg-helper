import SingleSpellTimer from "./SingleSpellTimer";

const allRoles: string[] = ["Roamer","EXP Laner","Mid Laner","Gold Laner","Jungler"];

export default function SpellTimer() {
  return (
    <div className="roles-container">
      {allRoles.map((value: string, index) => {
        return (
          <div className="timer-container" key={index}>
            <SingleSpellTimer role={value}/>
          </div>
        );
      })}
    </div>
  );
}
