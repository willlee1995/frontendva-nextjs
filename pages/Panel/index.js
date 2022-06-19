import React from "react";
import { Container, Grid, Typography, Button, Paper } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../../components/FormUI/Textfield";
import Link from "next/link";
import Head from "next/head";

const onSubmit = (values) => {
  console.log("This is the submitted result");
};

const valSchema = Yup.object().shape();

const iValues = {
  patientID: "A1234563",
};
export default function Panel() {
  return (
    <>
      <Head>
        <title>Panel</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Grid container alignContent="center" spacing={5}>
        <Grid item xs={12}>
          <Paper
            elevation={12}
            sx={{
              p: 3,
              height: "90vh",
            }}
          >
            <Container maxWidth="lg">
              <Paper
                elevation={12}
                sx={{
                  p: 3,
                  height: "85vh",
                  overflowY: "auto",
                }}
              >
                <Grid container>
                  <Formik
                    initialValues={{ ...iValues }}
                    validationSchema={valSchema}
                    onSubmit={onSubmit}
                  >
                    <Form>
                      <Grid
                        container
                        justifyContent="center"
                        alignContent="center"
                        alignItems="center"
                        spacing={4}
                        sx={{ p: 6 }}
                      >
                        <Grid alignContent="flex-start" item xs={12}>
                          <Typography variant="h4">
                            Please enter patient ID for accessing the panel.
                          </Typography>
                        </Grid>

                        <Grid item xs={12}>
                          <TextField name="patientID" Label="Patient ID" />
                        </Grid>
                        <Grid alignContent="center" item xs={3}>
                          <Link href="/demo-panel" passHref>
                            <Button
                              type="button"
                              fullWidth
                              variant="contained"
                              color="primary"
                            >
                              Search
                            </Button>
                          </Link>
                        </Grid>
                      </Grid>
                    </Form>
                  </Formik>
                </Grid>
              </Paper>
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
