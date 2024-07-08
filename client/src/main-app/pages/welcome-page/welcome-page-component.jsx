import ButtonComponent from "system/button/button-component";
import "./welcome-page-component.scss";

export default function WelcomePageComponent({ reportAComplaint }) {
  return (
    <div className="welcome-page-component">
      <div className="app-name">Role Inclusive</div>
      <div className="app-description">
        Every report counts: help create a more accessible city for all."
      </div>
      <img src="/wheelchair.png" className="welcome-page-background-img" />
      <div className="overlay" />
      <div className="button-wrapper">
        <ButtonComponent
          text="Next"
          onClick={reportAComplaint}
          className="welcome-page-next-button"
        />
      </div>
    </div>
  );
}
