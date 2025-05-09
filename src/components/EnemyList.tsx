import { useState } from "react";

const stages : string[] =["1-2","1-3","1-4","2-1","2-2","2-4","2-5"]

export default function EnemyList() {
  const [names, setNames] = useState<string[]>(Array(7).fill(""));
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <div className="mcgg">
          <div className="mcgg-instruction">
            <h2>How to Use MCGG List Helper</h2>
            <p>{`Enter all of the enemies' names from early stages (1-2 until 2-5) that you fight against in the corresponding input box. Starting from stage 2-6 you will know who you fight against and get much benefits from it  The list is still barely working after someone died.`}</p>
            <br />
            <h2>Why should I use MCGG List?</h2>
            <p>{`Better positioning of the hero to protect the damage dealer or make your CC and burst hero more effective, e.g. Marksman and Assassin heroes should try to avoid CC and burst damage as much as possible.`}</p>
            <p>{`When playing in a team (especially 4V4), keep your teammates alive when facing each other.`}</p>
            <br />
            <p>{`Pro Tip: In desktop browser, after entering the first name, press tab to select the next input box`}</p>
          </div>
        
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
        </div>
        
        <div className="mcgg-list">
          {names.map((value, index) => (
            <div className={"mcgg-list-children"} key={index}>
              <label htmlFor={`enemy-${index}`} className="center">
                {getOrdinal(index)} Enemy
              </label>
              <input
                id={"enemy"+index.toString()}
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
              className="mcgg-list__button"
            >
              Reset
            </button>
          </div>
        </div>

        
      </div>
    </>
  );
}
