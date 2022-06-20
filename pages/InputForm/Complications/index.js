import React from "react";
import listTypesInd from "../../../data/listTypesInd.json";
import { Grid } from "@mui/material";
import TextField from "../../../components/FormUI/Textfield";
import Select from "../../../components/FormUI/Select";
import NewDatePicker from "../../../components/FormUI/NewDatePicker";

function index() {
  return (
    // <Grid container spacing={1}>
    //
    //   <Grid item xs={6}>
    //     <TextField name="lastName" label="Patient Name" />
    //   </Grid>
    //   <Grid item xs={6}>
    //     <TextField name="patientID" label="Paitent ID" />
    //   </Grid>
    //   <Grid item xs={12}>
    //     <NewDatePicker name="dob" label="Date of Birth" />
    //   </Grid>
    //   <Grid item xs={12}>
    //     <TextField name="diagnosis" label="Diagnosis" />
    //   </Grid>
    // </Grid>
    <Grid container alignItems="stretch" spacing={1}>
      <Grid item xs={12}>
        <Select
          name="typesOfComplication"
          label="Types of complications"
          options={listTypesInd}
        />
      </Grid>
      <Grid item xs={12}>
        <NewDatePicker
          format="dd/MM/yy"
          name="complicationDate"
          label="Complications occured at?"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="detailsOfContraindication"
          label="Details of Complications"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField name="outcome" label="Outcome" />
      </Grid>
    </Grid>
  );
}

export default index;
