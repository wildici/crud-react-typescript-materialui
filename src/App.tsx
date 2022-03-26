import {BrowserRouter} from 'react-router-dom';

import {AppThemeProvider, DrawerProvider} from './shared/contexts';
import { AppRouter } from './routes';
import { MenuLateral } from './shared/components';

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>

          <MenuLateral>
            <AppRouter />
          </MenuLateral>
          
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};