import "@fontsource/open-sans";
import "../styles/globals.css";
import { QueryClientProvider, QueryClient, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Layout from "../components/Layout";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
const queryClient = new QueryClient();
const darkTheme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          background:
            "linear-gradient(to right top, #d16ba5, #ac69a6, #8665a0, #646092, #48587e, #426184, #3d6a89, #3a728c, #3b93ac, #3cb5c8, #47d8df, #5ffbf1);",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        },
      },
    },
  },
  palette: {
    background: {
      paper: "#324a5f",
      box: "#1b2a41",
    },
    mode: "dark",
  },
  typography: {
    fontFamily: ["Open Sans"],
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <ReactQueryDevtools initialIsOpen={false} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
