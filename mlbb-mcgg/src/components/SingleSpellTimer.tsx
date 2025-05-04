import { useTimer } from "react-timer-hook";
import { useState } from "react";
import Select from "react-select";
import spells from "../assets/spells.json";
import heroes from "../assets/heroes.json";

type Props = {
  role:string;
};

type SkillCooldowns = {
  [name: string]: number;
};

type HeroesSpells = {
  [name: string]: string;
}

type SelectObj = {
  value: string;
  label: string;
};

type SpellObj = {
  name: string,
  duration: number,
  isUsingPYT?: boolean,
}


const spellOptions: SelectObj[] = [
  { value: "Execute", label: "Execute" },
  { value: "Retribution", label: "Retribution" },
  { value: "Inspire", label: "Inspire" },
  { value: "Sprint", label: "Sprint" },
  { value: "Revitalize", label: "Revitalize" },
  { value: "Aegis", label: "Aegis" },
  { value: "Petrify", label: "Petrify" },
  { value: "Purify", label: "Purify" },
  { value: "Flameshot", label: "Flameshot" },
  { value: "Flicker", label: "Flicker" },
  { value: "Arrival", label: "Arrival" },
  { value: "Vengeance", label: "Vengeance" },
];

export default function SingleSpellTimer({role}:Props) {
  const [selectedSpell, setSelectedSpell] = useState<string>(() => {
    return role === "Jungler" ? "Retribution" : "Flicker";
  });
  const [selectedHero, setSelectedHero] = useState<string>("");
  
  const skillCooldowns : SkillCooldowns = spells;
  const heroesSpells: HeroesSpells = heroes;
  const imageSource: string = "MLBB/" + selectedSpell + "_ML.png";
  
  const { totalSeconds, restart, pause, isRunning } = useTimer({
    expiryTimestamp: new Date(
      new Date().getTime() + skillCooldowns[selectedSpell] * 1000
    ),
    autoStart: false,
  });

  const selectStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isSelected ? "white" : "black", // selected vs normal
      backgroundColor: state.isSelected ? "blue" : "white",
      ":hover": {
        color: "white",
        backgroundColor: "darkblue",
      },
    }),
  };

  return (
    <>
      <h2>{role}</h2>
      <p>Select Hero</p>
      <Select
        options={spellOptions}
        styles={selectStyles}
        isDisabled={role === "Jungler" ? true : false}
        onChange={(selected: any) => {
          restart(
            new Date(new Date().getTime())
          );
          setSelectedHero(selected.value)
          setSelectedSpell(selected.value);
        }}
      />
      <button
        className="timer__button"
        onClick={() => {
          restart(
            new Date(new Date().getTime() + skillCooldowns[selectedSpell] * 1000)
          );
        }}
      >
        <img
          src={imageSource}
          alt={"Spell Icon:" + selectedSpell}
          className={isRunning ? "darken" : "" + "timer__img"}
        />
        <p className="timer__p">
          {totalSeconds > 0 && isRunning ? totalSeconds : ""}
        </p>
      </button>
      <p>Select Spell</p>
      <Select
        options={spellOptions}
        styles={selectStyles}
        defaultValue={role === "Jungler" ? spellOptions[1]: spellOptions[9]}
        isDisabled={role === "Jungler" ? true : false}
        onChange={(selected: any) => {
          restart(
            new Date(new Date().getTime())
          );
          setSelectedSpell(selected.value);
        }}
      />
    </>
  );
}
