import {BrowserRouter} from "react-router-dom";

import {AppThemeProvider} from "./shared/contexts";
import { AppRouter } from "./routes";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppThemeProvider>
  );
}