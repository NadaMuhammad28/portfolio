import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import { useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";

export default function Field({ props }) {
  const [errMsg, setErrMsg] = useState("");
  const { fieldState, setFieldState } = useGlobalContext();

  const { id, label, type, variant, name, err, pattern } = props;
  const handleValidation = (e) => {
    const value = e.target.value;
    const isValid = pattern.test(value);
    if (!isValid) {
      setErrMsg(err);
      setFieldState({ ...fieldState, [e.target.name]: false });
    }
    if (isValid) {
      setErrMsg("");
      setFieldState({ ...fieldState, [e.target.name]: true });
      // setDisabled(false)
    }
  };

  return (
    <Text
      id={id}
      label={label}
      type={type}
      variant={variant}
      name={name}
      fullWidth
      helperText={errMsg}
      rows={id === "message" ? 4 : 0}
      multiline={id === "message"}
      onBlur={(e) => handleValidation(e)}
      error={!!errMsg}
      autoComplete="new-password"
      InputProps={{
        className: "some-class",
      }}
    />
  );
}

const Text = styled(TextField)`
  label {
    color: #d1d5db !important;
    z-index: 1;
  }


  input,
  textarea {
    color: #f3f3f3;
    padding: 0.2rem 0;

  .MuiFormHelperText-root {
    color:#d32f2f ;
  }
 
`;
