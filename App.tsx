import React from 'react';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from '@navigation/RootNavigation';
import {ThemeProvider} from 'styled-components';
import {light} from '@/theme/light';

const queryClient = new QueryClient();

const theme = {color: light};
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
