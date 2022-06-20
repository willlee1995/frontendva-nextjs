import React, { Fragment, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useField, useFormikContext } from "formik";

export default function DateP({ format, name, ...otherProps }) {
  const { field, meta } = useField(name);
  const [selectedDate, handleDateChange] = useState(null);
  const { setFieldValue } = useFormikContext();
  const configNewDatePicker = {
    ...field,
    ...otherProps,
    placeholder: "",
    value: selectedDate,
    onChange: handleChange,
    format: format,
    clearable: true,
    disableFuture: false,
    fullWidth: true,
    inputVariant: "outlined",
    allowKeyboardControl: true,
    openTo: "date",
  };

  function handleChange(date) {
    handleDateChange(date);

    setFieldValue(name, date);
  }

  if (meta && meta.touched && meta.error) {
    configNewDatePicker.error = true;
    configNewDatePicker.helperText = meta.error;
  }
  return (
    <Fragment>
      <DatePicker {...configNewDatePicker} />
    </Fragment>
  );
}
