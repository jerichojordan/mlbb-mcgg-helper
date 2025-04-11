type TopBarProps = {
  changeSite: (siteName:string) => void;
};

export default function TopBar(props:TopBarProps) {
  return (
    <>
      <div className="topbar">
        <button onClick={()=>props.changeSite("MCGG")} className="topbar__button">
          <figure>
            <img
              src="MCGG/MCGG_Logo.png"
              alt="mcgg-logo"
              className="topbar__img"
            />
            <figcaption className="offscreen">MCGG Logo</figcaption>
          </figure>
        </button>
        <button onClick={()=>props.changeSite("MLBB")} className="topbar__button topbar__mlbb">
          <figure>
            <img
              src="MLBB/MLBB_Logo.png"
              alt="mlbb-logo"
              className="topbar__img"
            />
            <figcaption className="offscreen">MLBB Logo</figcaption>
          </figure>
        </button>
      </div>
    </>
  );
}
