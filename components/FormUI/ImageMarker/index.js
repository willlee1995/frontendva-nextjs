import ImageMarker from "react-image-marker";
import { useState, useEffect } from "react";
import { useField, useFormikContext } from "formik";
import { Grid, Button } from "@mui/material";

const MarkerWrapper = ({ name, ...rest }) => {
  const initState = [{ top: 49.89298846022498, left: 49.157301966140636 }]; //for demo, make sure to delete when moving on
  const { setFieldValue } = useFormikContext();
  const [markers, setMarkers] = useState(initState);
  const [field, meta] = useField(name);
  var markersArray = JSON.parse(JSON.stringify(markers)); // That's the method for cloning with drawback of flattening the type of the object
  const handleApply = () => {
    setFieldValue(name, markers);

    console.log(markers);
  };
  const handleDelete = () => {
    setMarkers([]);
  };
  function handlePop() {
    markersArray.pop();
    return markersArray;
    // Need to research for ways to splice an array without flattening //
  }

  function handleRemove(markersArray) {
    var newMarkersArray = handlePop();

    if (newMarkersArray.length === 0) {
      return setMarkers(initState);
    } else if (newMarkersArray.length > 0) {
      return setMarkers(newMarkersArray);
    } else {
      z;
    }
  }
  const HandleAdd = (marker) => {
    setMarkers((currMakers) => [...currMakers, marker]);
  };
  useEffect(
    (name) => {
      console.log("Inside useEffect hook, for debugging", markers);
    },
    [markers]
  );
  const configImageMarker = {
    ...field,
    ...rest,
    src: "/anatomy.svg",
    markers: markers,
    onAddMarker: HandleAdd,
  };

  if (meta && meta.touched && meta.error) {
    configImageMarker.error = true;
    configImageMarker.helperText = meta.error;
  }
  return (
    <>
      <Grid container>
        <Grid item sx={{ p: 1, display: "inline-block" }} xs={12}>
          <ImageMarker {...configImageMarker} />
        </Grid>
        <Grid item spacing={1} xs={12}>
          <Grid container spacing={12}>
            <Grid item xs={4}>
              <Button
                fullWidth
                onClick={handleDelete}
                variant="contained"
                color="secondary"
              >
                Reset
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                fullWidth
                onClick={handleApply}
                variant="contained"
                color="secondary"
              >
                Apply
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                fullWidth
                onClick={handleRemove}
                variant="contained"
                color="secondary"
              >
                Delete last marker
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MarkerWrapper;
