import React from "react";
import { Grid } from "@mui/material";

import TextField from "../../../components/FormUI/Textfield";
import NewDatePicker from "../../../components/FormUI/NewDatePicker";
import Vein from "../../../data/Vein.json";
import Select from "../../../components/FormUI/Select";

const optionLat = {
  L: "Left",
  R: "Right",
  U: "Unspecified",
};
const optionYesOrno = {
  0: "No",
  1: "Yes",
};

function index() {
  return (
    <Grid container spacing={1}>
      {/* <Grid item xs={12}>
        <Typography variant="h6">Vascular access Log</Typography>
      </Grid> */}
      <Grid item xs={12}>
        <NewDatePicker name="examDate" label="Date of insertion" />
      </Grid>
      <Grid item xs={12}>
        <TextField name="provider" label="Provider of the device" />
      </Grid>
      <Grid item xs={12}>
        <TextField name="fr" label="French size of device" />
      </Grid>
      <Grid item xs={12}>
        <TextField name="device" label="Device name" />
      </Grid>
      <Grid item xs={12}>
        <Select
          id="accessVein"
          name="accessVein"
          label="Accessed Vein"
          options={Vein}
        />
      </Grid>
      <Grid item xs={12}>
        <Select
          id="lateralityLabel"
          name="laterality"
          label="Laterality"
          options={optionLat}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField name="tipPos" label="Tip position" />
      </Grid>
      <Grid item xs={12}>
        <NewDatePicker name="removalDate" label="Date of removal" />
      </Grid>
      <Grid item xs={12}>
        <Select
          name="treatmentEndpoint"
          label="Treatment Endpoint achieved?"
          options={optionYesOrno}
        />
      </Grid>
      <Grid item xs={12}>
        <Select
          name="complications"
          label="Any complications?"
          helperText="If Yes, please go to next page"
          options={optionYesOrno}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField name="remarks" label="Remarks" />
      </Grid>
    </Grid>
  );
}

export default index;
