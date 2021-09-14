import "./Header.css";

export const Header = ({ children }) => {
  return (
    <header className="header">
      {children}
      <div className="header__container">
        <h1 className="header__title">Tilda’s Tasteful Teas</h1>
        <p className="header__text">
          Fantastic flavours brought to you from our traditional tea makers.{" "}
        </p>
      </div>
      <div className="header__btngroup">
        <button className="btn header__btn header__btn--primary">
          Browse Our Selection
        </button>
        <button className="btn header__btn header__btn--secondary">
          Come Visit Us
        </button>
      </div>
    </header>
  );
};
