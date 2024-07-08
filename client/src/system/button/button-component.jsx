import Button from "@mui/material/Button";
import "./button-component.scss";

export default function ButtonComponent({ text, onClick }) {
  return (
    <Button
      className="button-component"
      onClick={onClick}
      variant="contained"
      color="primary"
    >
      {text}
    </Button>
  );
}
