import { useState } from "react";
import { useIsMobile } from "../hooks/UseIsMobile";
import EnemyListInstruction from "./EnemyListInstruction";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { VscDebugRestart } from "react-icons/vsc";

const stages: string[] = ["1-2", "1-3", "1-4", "2-1", "2-2", "2-4", "2-5"];

export default function EnemyList() {
  const [names, setNames] = useState<string[]>(Array(7).fill(""));
  const [currentIndex, setCurrentIndex] = useState(0);

  const isMobile = useIsMobile();
  const [showPopup, setShowPopup] = useState(false);

  function getOrdinal(n: number): string {
    if (n === 0) return "1st";
    if (n === 1) return "2nd";
    if (n === 2) return "3rd";
    return `${n + 1}th`;
  }

  const handleChange = (index: number, value: string) => {
    const newNames = [...names];
    newNames[index] = value;
    setNames(newNames);
  };

  function handleReset() {
    setNames(Array(7).fill(""));
  }

  function handleNextButton(): void {
    currentIndex + 1 > 6
      ? setCurrentIndex(currentIndex + 1 - 7)
      : setCurrentIndex(currentIndex + 1);
  }
  function handlePrevButton(): void {
    currentIndex - 1 < 0
      ? setCurrentIndex(currentIndex - 1 + 7)
      : setCurrentIndex(currentIndex - 1);
  }
  return (
    <>
      {showPopup ? (
        <div className="mcgg-instruction-overlay">
          <div className="mcgg-instruction-popup">
            <div className="mcgg-instruction-x-button-container">
              <button
                className="mcgg-instruction-x-button"
                onClick={() => setShowPopup(false)}
              >
                X
              </button>
            </div>
            <EnemyListInstruction />
            <button
              className="mcgg-instruction-ok-button"
              onClick={() => setShowPopup(false)}
            >
              OK
            </button>
          </div>
        </div>
      ) : null}

      <div className="mcgg">
        {isMobile ? null : (
          <div className="mcgg-instruction">
            <EnemyListInstruction />
          </div>
        )}
        <div className="mcgg-status">
          <div className="mcgg-status__container">
            <p>
              Previous Enemy:&nbsp;
              {currentIndex - 1 < 0
                ? names[currentIndex - 1 + 7]
                : names[currentIndex - 1]}
            </p>
            <p>Current Enemy:&nbsp;&nbsp;{names[currentIndex]}</p>
            <p>
              Next Enemy:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {currentIndex + 1 > 6
                ? names[currentIndex + 1 - 7]
                : names[currentIndex + 1]}
            </p>
          </div>
          <div className="mcgg-status__button-container">
            <button
              type="button"
              onClick={handlePrevButton}
              className="mcgg-status__button"
            >
              Previous Battle
            </button>
            <button
              type="button"
              onClick={handleNextButton}
              className="mcgg-status__button"
            >
              Next Battle
            </button>
          </div>
          {isMobile ? (
            <div className="mcgg-status__info-button-container">
              <button
                onClick={() => setShowPopup(true)}
                className="mcgg-status__info-button mcgg-status__button"
              >
                <IoIosInformationCircleOutline size={18}/>
              </button>
            </div>
          ) : null}
        </div>

        <div className="mcgg-list">
          {names.map((value, index) => (
            <div className={"mcgg-list-children"} key={index}>
              <label htmlFor={`enemy-${index}`} className="center">
                {getOrdinal(index)} Enemy
              </label>
              <input
                id={"enemy" + index.toString()}
                key={index}
                type="text"
                value={value}
                onChange={(e) => handleChange(index, e.target.value)}
                placeholder={`Enemy on ${stages[index]}`}
                className="mcgg-list__input"
              />
            </div>
          ))}
          <div className="mcgg-list__button-container">
            <button
              onClick={handleReset}
              type="submit"
              className="mcgg-list__button mcgg-list__reset-button"
            >
              <VscDebugRestart size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
