import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

const TextfieldWrapper = ({ helperText, name, ...rest }) => {
  const [field, meta] = useField(name);
  const configTextfield = {
    ...field,
    ...rest,
    fullWidth: true,
    variant: "outlined",
    helperText: helperText,
  };

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }
  return <TextField {...configTextfield} />;
};

export default TextfieldWrapper;
