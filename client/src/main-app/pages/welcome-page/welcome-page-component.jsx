import ButtonComponent from "system/button/button-component";
import "./welcome-page-component.scss";

export default function WelcomePageComponent({ InstructionsPage }) {
  return (
    <div className="welcome-page-component">
      <img src="/wheelchairmap.png" className="welcome-page-small-img" />
      <div className="app-name">Clear Access</div>
      <div className="app-description">
        Chaque signalement compte: participez à la création d'une ville plus
        accessible pour tous.
      </div>
      <img src="/background.png" className="welcome-page-background-img" />
      {/* <div className="overlay" /> */}
      <div className="button-wrapper">
        <ButtonComponent
          text="Suivant"
          onClick={InstructionsPage}
          className="welcome-page-next-button"
        />
      </div>
    </div>
  );
}
