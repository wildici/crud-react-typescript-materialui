import {BrowserRouter} from 'react-router-dom';

import {AppThemeProvider} from './shared/contexts';
import { AppRouter } from './routes';
import { MenuLateral } from './shared/components';

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <MenuLateral>
          <AppRouter />
        </MenuLateral>
      </BrowserRouter>
    </AppThemeProvider>
  );
};