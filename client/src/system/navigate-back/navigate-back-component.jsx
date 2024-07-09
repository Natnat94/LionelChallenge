import "./navigate-back-component.scss";

export default function NavigateBackComponent({ title, navigateBackAction }) {
  return (
    <div className="navigate-back-component">
      <div className="navigate-back-arrow" onClick={navigateBackAction}>
        <img src="arrow_back.png" />
      </div>
      <div className="navigate-back-title">{title}</div>
    </div>
  );
}
