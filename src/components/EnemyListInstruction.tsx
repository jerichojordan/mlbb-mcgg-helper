const EnemyListInstruction = () => {
  return (
    <>
      <h2 className="warning mcgg-instruction__h2">
        PLEASE DON'T USE THIS TOOL FOR TOURNAMENT PURPOSE
      </h2>
      <h2 className="mcgg-instruction__h2">How to Use MCGG List Helper</h2>
      <p className="mcgg-instruction__p">{`Enter all of the enemies' names from early stages (1-2 until 2-5) that you fight against in the corresponding input box. Starting from stage 2-6 you will know who you fight against and get much benefits from it  The list is still barely working after someone died.`}</p>
      <br />
      <h2 className="mcgg-instruction__h2">Why should I use MCGG List?</h2>
      <p className="mcgg-instruction__p">{`Better positioning of the hero to protect the damage dealer or make your CC and burst hero more effective, e.g. Marksman and Assassin heroes should try to avoid CC and burst damage as much as possible.`}</p>
      <p className="mcgg-instruction__p">{`When playing in a team (especially 4V4), keep your teammates alive when facing each other.`}</p>
      <br />
      <p className="mcgg-instruction__p">{`Pro Tip: In desktop browser, after entering the first name, press tab to select the next input box`}</p>
    </>
  );
};

export default EnemyListInstruction;
