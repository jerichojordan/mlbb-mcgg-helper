import { useTimer } from "react-timer-hook";
import { useState, useMemo } from "react";
import Select from "react-select";
import spells from "../assets/spells.json";
import heroes from "../assets/heroes.json";
import { useIsMobile } from "../hooks/UseIsMobile";

type Props = {
  role: string;
};

type SkillCooldowns = {
  [name: string]: number;
};

type HeroesSpells = {
  [name: string]: string;
};

type SelectObj = {
  value: string;
  label: string;
};

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

export default function SingleSpellTimer({ role }: Props) {
  const [selectedSpell, setSelectedSpell] = useState<string>(() => {
    return role === "Jungler" ? "Retribution" : "Flicker";
  });
  const [isUsingPYT, setIsUsingPYT] = useState(false);

  const isMobile = useIsMobile()
  const displayRole : string = isMobile ? role.split(" ")[0]: role
  const skillCooldowns: SkillCooldowns = spells;
  const heroesSpells: HeroesSpells = heroes;
  const totalSkillCooldown = isUsingPYT
    ? 0.8 * skillCooldowns[selectedSpell] * 1000
    : skillCooldowns[selectedSpell] * 1000;
  const imageSource: string = useMemo(
    () => "MLBB/" + selectedSpell + "_ML.png",
    [selectedSpell]
  );
  const heroOptions: SelectObj[] = useMemo(
    () =>
      Object.entries(heroes).map(([name]) => ({
        value: name,
        label: name,
      })),
    []
  );

  const { totalSeconds, restart, isRunning } = useTimer({
    expiryTimestamp: new Date(new Date().getTime() + totalSkillCooldown),
    autoStart: false,
  });

  const onHeroChange = ({value}:SelectObj) => {
    restart(new Date(new Date().getTime()));
    setSelectedSpell(heroesSpells[value])
  };

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
      <h2 className="timer__h2 center">{displayRole}</h2>
      <div
        className={`timer__select-hero ${role === "Jungler" ? "hidden" : ""}`}
      >
        <p className="center">Select Hero</p>
        <Select
          options={heroOptions}
          styles={selectStyles}
          isDisabled={role === "Jungler" ? true : false}
          onChange={(selected: SelectObj | null) => {
            if (selected) {
              onHeroChange(selected)
            }
          }}
        />
      </div>
      <button
        className="timer__button"
        onClick={() => {
          restart(new Date(new Date().getTime() + totalSkillCooldown));
        }}
      >
        <img
          src={imageSource}
          alt={"Spell Icon:" + selectedSpell}
          className={isRunning ? "timer__img darken" : "timer__img"}
        />
        <p className="timer__p">
          {totalSeconds > 0 && isRunning ? totalSeconds : ""}
        </p>
      </button>
      <p className="center">Select Spell</p>
      <Select
        isSearchable={!isMobile}
        options={spellOptions}
        styles={selectStyles}
        value={spellOptions.find((opt) => opt.value === selectedSpell)}
        isDisabled={role === "Jungler" ? true : false}
        onChange={(selected: SelectObj | null) => {
          if (selected) {
            restart(new Date(new Date().getTime()));
            setSelectedSpell(selected.value);
          }
        }}
      />
      <div className="timer-input-pyt">
        <input
          type="checkbox"
          name="PYT"
          onChange={(e) => {
            restart(new Date(new Date().getTime()));
            setIsUsingPYT(e.target.checked);
          }}
        />
        <img
          src="/MLBB/Pull_Yourself_Together.png"
          alt="Pull Yourself Together Emblem"
          className="timer-input-pyt__img"
        />
      </div>
    </>
  );
}
