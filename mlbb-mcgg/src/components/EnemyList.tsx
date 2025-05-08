import { useState } from "react";
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
                placeholder={`Enemy ${index + 1}`}
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
      </div>
    </>
  );
}
