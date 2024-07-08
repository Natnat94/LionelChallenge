import ButtonComponent from "system/button/button-component";
import "./welcome-page-component.scss";

export default function WelcomePageComponent() {
  return (
    <div className="welcome-page-component">
      <div className="welcome-message">Welcome to our reporting system</div>
      <div className="button-wrapper">
        <ButtonComponent text="Report an issue" />
      </div>
    </div>
  );
}
