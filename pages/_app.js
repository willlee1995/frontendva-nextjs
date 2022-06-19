import "../styles/globals.css";
import { QueryClientProvider, QueryClient, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Layout from "../components/Layout";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const queryClient = new QueryClient();
const darkTheme = createTheme({
  palette: {
    background: {
      paper: "#324a5f",
      box: "#1b2a41",
    },
    mode: "dark",
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={darkTheme}>
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
