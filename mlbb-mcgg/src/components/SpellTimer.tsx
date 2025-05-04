import SingleSpellTimer from "./SingleSpellTimer";

const allRoles: string[] = ["Roamer","EXP Laner","Mid Laner","Gold Laner","Jungler"];

export default function SpellTimer() {
  return (
    <div className="roles-container">
      {allRoles.map((value: string) => {
        return (
          <div className="timer-container">
            <SingleSpellTimer role={value}/>
          </div>
        );
      })}
    </div>
  );
}
