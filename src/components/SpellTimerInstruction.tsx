const SpellTimerInstruction = () => {
  return (
    <div className="mlbb-instruction">
      <h2 className="warning mlbb-instruction__h2 center">
        PLEASE DO NOT USE THIS TOOL FOR TOURNAMENT PURPOSE
      </h2>
      <h2 className="mlbb-instruction__h2">How to Use MLBB Spell Timer</h2>
      <p className="mlbb-instruction__p">{`While drafting, enter the names of all the enemy heroes you will be fighting against in the corresponding select box and predict their roles. Then, while waiting for the match to load, check all of the roles and spells to ensure they are correct.`}</p>
      <h2 className="mlbb-instruction__h2">Why should I use MLBB Spell Timer?</h2>
      <p className="mlbb-instruction__p">{`Having a better knowledge of the enemies' spell cooldowns results in more successful ganking and war, as well as better decision-making.`}</p>
    </div>
  )
}

export default SpellTimerInstruction