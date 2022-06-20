import React from "react";
import { TextField, MenuItem } from "@mui/material";
import { useField, useFormikContext } from "formik";

function SelectWrapper({ helperText, name, options, label, ...rest }) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const handleChange = (evt) => {
    const { value } = evt.target;
    console.log(evt);
    setFieldValue(name, value);
  };
  const configSelect = {
    ...field,
    select: true,
    variant: "outlined",
    fullWidth: true,
    onChange: handleChange,
    label: label,
    helperText: helperText,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }
  return (
    <TextField {...configSelect}>
      {Object.keys(options).map((item, pos) => {
        return (
          <MenuItem key={pos} value={item}>
            {options[item]}
          </MenuItem>
        );
      })}
    </TextField>
  );
}

export default SelectWrapper;
