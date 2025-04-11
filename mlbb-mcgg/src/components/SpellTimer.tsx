import { useTimer } from "react-timer-hook";

export default function SpellTimer() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60); // 60-second timer

  const { seconds, minutes, hours, start, restart } = useTimer({ expiryTimestamp: time, onExpire: () => console.log("Time's up!") });

  return (
    <div>
      <h1>{hours}:{minutes}:{seconds}</h1>
      <button onClick={start}>Start</button>
      <button onClick={() => restart(time)}>Reset</button>
    </div>
  );
}
