import Button from "@mui/material/Button";
import "./button-component.scss";

export default function ButtonComponent({ text, onClick, className }) {
  return (
    <Button
      className={`button-component ${className}`}
      onClick={onClick}
      variant="contained"
      color="primary"
    >
      {text}
    </Button>
  );
}
