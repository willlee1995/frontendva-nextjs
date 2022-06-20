import React from "react";
import { Grid } from "@mui/material";
import ImageMarker from "../../../components/FormUI/ImageMarker";
import Select from "../../../components/FormUI/Select";

const optionsPatency = {
  1: "Patent",
  2: "Narrowed",
  3: "Obstructed",
  4: "Unknown",
};

function VenMap() {
  return (
    <Grid container spacing={2}>
      <Grid alignContent="center" item xs={12}>
        <ImageMarker height="80vh" name="initialAccess" label="Anatomy map" />
      </Grid>
      <Grid alignContent="center" item xs={12}>
        <Grid item xs={12}>
          <Select name="patency" label="Patency" options={optionsPatency} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default VenMap;
