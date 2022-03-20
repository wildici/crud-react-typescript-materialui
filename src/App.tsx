import {ThemeProvider} from "@mui/material";
import {BrowserRouter} from "react-router-dom";

import {LightTheme} from "./shared/themes";
import { AppRouter } from "./routes";

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}