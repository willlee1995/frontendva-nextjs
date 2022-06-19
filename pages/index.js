import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Container, Grid, Typography, Button, Paper } from "@mui/material";
import TextField from "../components/FormUI/Textfield";
import Password from "../components/FormUI/Password";

function index() {
  const iValues = {
    user: "",
    password: "",
  };
  const validationSchema = Yup.object({
    user: Yup.string().required(),
    password: Yup.string().required(),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.values);
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper
          elevation={12}
          sx={{
            p: 3,
            height: "85vh",
            overflowY: "auto",
          }}
        >
          <Container sx={{ p: 4 }} maxWidth="lg">
            <Paper
              elevation={12}
              sx={{
                p: 3,
                height: "60vh",
                overflowY: "auto",
              }}
            >
              <Formik
                initialValues={iValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={6}
                  >
                    <Grid item sx={{ mt: 12 }} xs={12}>
                      <Typography variant="h5">Please Login</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField name="user" label="User Name" />
                    </Grid>
                    <Grid item xs={12}>
                      <Password name="password" label="Password" />
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                      <Grid sx={{ p: 6 }} item xs={8}>
                        <Button
                          fullWidth
                          variant="contained"
                          color="primary"
                          type="submit"
                        >
                          Login
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Form>
              </Formik>
            </Paper>
          </Container>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default index;
