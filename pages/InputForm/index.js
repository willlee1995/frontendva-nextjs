import { useState } from "react";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Container, Grid, Button } from "@mui/material";
//import Autocomplete from '../FormsUI/Autocomplete'

import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";

import TabPanel from "../../components/FormUI/TabPanel";
import PatientDemo from "./PatientDemo";
import VenMap from "./VenMap";
import AccessDevice from "./AccessDevice";
import Complications from "./Complications";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const iValues = {
  name: "Addie Franceschi",
  patientID: "A1234563",
  dob: new Date(2020, 1, 1),
  diagnosis: "Congenital Heart disease",
  initialAccess: [{ top: 49.89298846022498, left: 49.157301966140636 }], //for demo purpose
  patency: 1,
  examDate: new Date(2021, 1, 1),
  provider: "IR",
  fr: "6Fr",
  device: "Bioflo double lumen PICC",
  accessVein: "EIV",
  laterality: "L",
  tipPos: "SVC/RA junction",
  removalDate: new Date(2021, 3, 1),
  treatmentEndpoint: 1,
  complications: 1,
  remarks: "None",
  typesOfComplication: "PR",
  complicationDate: new Date(),
  detailsOfComplication: "Failed initial puncture",
  managementOfComp: "",
  outcome: "",
};
const valSchema = Yup.object().shape({
  patientID: Yup.string()
    .matches(
      /^[A-Z]{1,2}[0-9]{6}[0-9A-F]{1}/,
      "This is not a valid HKID format"
    )
    .required("Required"),
  name: Yup.string().required("Required"),

  // initialAccess: Yup.array().min(1, "Click me "), // require an alert for user if no apply is pressed before
});
const onSubmit = (values) => {
  console.log("This is the submitted result", values);
};

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const handleNext = () => {
    setValue((currentValue) => currentValue + 1);
  };
  const handleBack = () => {
    setValue((currentValue) => currentValue - 1);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid container alignItems="center" spacing={1}>
        <Container maxWidth="lg">
          <Grid item xs={12}>
            <Paper
              elevation={12}
              sx={{
                p: 3,
                height: "85vh",
                overflowY: "auto",
              }}
            >
              <Grid item xs={12}>
                <AppBar color="transparent" position="static">
                  <Tabs
                    centered
                    indicatorColor="secondary"
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                  >
                    <Tab label="Patient Demographic" {...a11yProps(0)} />
                    <Tab label="Venous Mapping" {...a11yProps(1)} />
                    <Tab label="Access Device" {...a11yProps(2)} />
                    <Tab label="Complications" {...a11yProps(3)} />
                  </Tabs>
                </AppBar>
              </Grid>
              <Grid item xs={12}>
                <Container maxWidth="md">
                  <Formik
                    initialValues={{ ...iValues }}
                    validationSchema={valSchema}
                    onSubmit={onSubmit}
                  >
                    <Form>
                      <Grid
                        sx={{ mt: 4, mb: 8 }}
                        container
                        justifyContent="center"
                        alignItems="center"
                      >
                        <TabPanel value={value} index={0}>
                          <Grid item xs={12}>
                            <PatientDemo /> {/* Tab 1 */}
                          </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                          <Grid item xs={12}>
                            <VenMap /> {/* Tab 2 */}
                          </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                          <Grid item xs={12}>
                            <AccessDevice /> {/* Tab 3 */}
                          </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                          <Grid item xs={12}>
                            <Complications /> {/* Tab 4 */}
                          </Grid>
                        </TabPanel>
                        <Grid
                          container
                          justifyContent="space-evenly"
                          alignItems="center"
                          item
                          sx={{ pt: 2 }}
                          xs={12}
                        >
                          {value !== 3 ? (
                            <Grid item xs={4}>
                              <Button
                                fullWidth
                                variant="contained"
                                onClick={handleNext}
                              >
                                Next
                              </Button>
                            </Grid>
                          ) : (
                            <></>
                          )}
                          {value !== 0 ? (
                            <Grid item xs={4}>
                              <Button
                                fullWidth
                                variant="contained"
                                onClick={handleBack}
                              >
                                Back
                              </Button>
                            </Grid>
                          ) : (
                            <Grid item xs={4}></Grid>
                          )}
                          {value == 3 ? (
                            <Grid item xs={4}>
                              <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                type="submit"
                              >
                                Submit
                              </Button>
                            </Grid>
                          ) : (
                            <></>
                          )}
                        </Grid>
                      </Grid>
                    </Form>
                  </Formik>
                </Container>
              </Grid>
            </Paper>
          </Grid>
        </Container>
      </Grid>
    </LocalizationProvider>
  );
}

export default App;
