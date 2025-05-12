type Props = {
  currentSite: string;
  setCurrentSite: React.Dispatch<React.SetStateAction<string>>;
};

export default function TopBar({ currentSite, setCurrentSite }: Props) {
  return (
    <div className="header-container">
      <div className="topbar-left">
        <button
          onClick={() => setCurrentSite("MCGG")}
          className="topbar__button"
          title="Open MCGG Helper"
        >
          <figure>
            <img
              src="MCGG/MCGG_Logo.png"
              alt="mcgg-logo"
              className="topbar__img"
            />
            <figcaption className="offscreen">MCGG Logo</figcaption>
          </figure>
        </button>
        <button
          onClick={() => setCurrentSite("MLBB")}
          className="topbar__button"
          title="Open MLBB Helper"
        >
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
      <div className="topbar-middle">
        <h1>{currentSite} Helper</h1>
      </div>
      <div className="topbar-right">
        <a
          href="https://github.com/jerichojordan"
          className="topbar-profile"
          target="_block"
          rel="noopener noreferrer"
          title="Open GitHub"
        >
          <img
            src="/Psyduck.jpg"
            alt="psyduck profile"
            className="topbar__button"
            width={52.75}
          />
        </a>
      </div>
    </div>
  );
}
