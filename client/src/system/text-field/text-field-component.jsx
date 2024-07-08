import { TextField } from "@mui/material";

export default function TextFieldComponent({ label, multiline }) {
  return <TextField label={label} multiline={multiline} minRows={3} />;
}
