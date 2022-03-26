import {BrowserRouter} from 'react-router-dom';

import {AppThemeProvider, DrawerProvider, LanguageProvider} from './shared/contexts';
import { AppRouter } from './routes';
import { MenuLateral } from './shared/components';
import { Lan } from '@mui/icons-material';

export const App = () => {
  return (
  // <AppThemeProvider>
  //   <DrawerProvider>
  //     <BrowserRouter>

  //       <MenuLateral>
  //         <AppRouter />
  //       </MenuLateral>
          
    //     </BrowserRouter>
    //   </DrawerProvider>
    // </AppThemeProvider>
    <AppThemeProvider>
      <DrawerProvider>
        <LanguageProvider>
          
          <BrowserRouter>

            <MenuLateral>
              <AppRouter />
            </MenuLateral>

          </BrowserRouter>

        </LanguageProvider>
      </DrawerProvider>
    </AppThemeProvider>
  );
};