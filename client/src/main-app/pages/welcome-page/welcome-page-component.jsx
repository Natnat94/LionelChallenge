import ButtonComponent from "system/button/button-component";
import "./welcome-page-component.scss";

export default function WelcomePageComponent({ reportAComplaint }) {
  return (
    <div className="welcome-page-component">
      <div className="app-name">CommunityAccess</div>
      <div className="app-description">
        Welcome to our application dedicated to improving accessibility for
        people with disabilities. This platform allows users to easily report
        PMR (People with Reduced Mobility) accessibility issues that they
        encounter on a daily basis, such as the absence of access ramps, holes
        in the sidewalks, or any other obstacle.
      </div>
      <div className="button-wrapper">
        <ButtonComponent text="Report an issue" onClick={reportAComplaint} />
      </div>
    </div>
  );
}
