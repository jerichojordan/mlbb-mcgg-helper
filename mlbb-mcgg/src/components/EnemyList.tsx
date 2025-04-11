import { useState } from "react";
export default function EnemyList() {
  const [names, setNames] = useState<string[]>(Array(7).fill(""));
  const [currentIndex, setCurrentIndex] = useState(0);

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
        <div className="mcgg__list">
          {names.map((value, index) => (
            <>
              <label htmlFor="name1">
                {index === 0
                  ? "1st"
                  : index === 1
                  ? "2nd"
                  : index === 2
                  ? "3rd"
                  : index + 1 + "th"}{" "}
                Enemy
              </label>
              <input
                key={index}
                type="text"
                value={value}
                onChange={(e) => handleChange(index, e.target.value)}
                placeholder={`Enemy ${index + 1}`}
                className="mcgg__list_input"
              />
            </>
          ))}
          <div className="mcgg-list__button-container">
            <button onClick={handleReset} type="submit" className="mcgg-list__button">
              Reset
            </button>
          </div>
        </div>

        <div className="mcgg__control mcgg-status">
          <div className="mcgg-status__container">
            <p>
              Previous Enemy:{" "}
              {currentIndex - 1 < 0
                ? names[currentIndex - 1 + 7]
                : names[currentIndex - 1]}
            </p>
            <p>Current Enemy: {names[currentIndex]}</p>
            <p>
              Next Enemy:{" "}
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
