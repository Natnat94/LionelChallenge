import ButtonComponent from "system/button/button-component";
import "./instructions-page-component.scss";

const INSTRUCTIONS = [
  {
    img: "highlight_mouse_cursor.png",
    title: "Appui aux associations",
    text: "Des données concrètes renforcent la capacité des associations à plaider en faveur de travaux et d'améliorations concrètes.",
  },
  {
    img: "timeline.png",
    title: "Suivi des interventions",
    text: "Les utilisateurs peuvent voir l'impact de leurs signalements et être informés des progrès réalisés.",
  },
  {
    img: "diversity_3.png",
    title: "Communauté et support",
    text: "En rejoignant notre application, les utilisateurs font partie d'une communauté solidaire qui partage des expériences et des solutions.",
  },
];

export default function InstructionsPageComponent({ complaintsMapPage }) {
  const renderInstruction = ({ img, title, text }) => {
    return (
      <div className="single-instruction">
        <img className="instruction-img" src={img} />
        <div className="instruction-title-and-text">
          <div className="instruction-title">{title}</div>
          <div className="instruction-text">{text}</div>
        </div>
      </div>
    );
  };

  const renderInstructions = () => {
    return (
      <div className="all-instructions">
        {INSTRUCTIONS.map((instruction) => {
          return renderInstruction(instruction);
        })}
      </div>
    );
  };

  return (
    <div className="instructions-page-component">
      <img src="/background.png" className="welcome-page-background-img" />
      <div className="instruction-page-content">
        <div className="welcome-instructions">
          Bienvenue sur Roll Inclusive, une application dédiée au signalement de
          problèmes d’accessibilité.
        </div>
        {/* <div className="overlay" /> */}
        {renderInstructions()}
        <div className="button-wrapper">
          <ButtonComponent
            text="Suivant"
            onClick={complaintsMapPage}
            className="welcome-page-next-button"
          />
        </div>
      </div>
    </div>
  );
}
