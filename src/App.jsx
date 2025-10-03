import '@mantine/core/styles.css';

import { MantineProvider, Modal } from '@mantine/core';
import { Navbar } from './components/NavBar/navBar';
import { BackgroundProvider } from './contexts/backgroundContext';
import { DailyBackgroundProvider } from './contexts/dailyBackgroundContext';

import './styles.css';

import { RouterProvider } from 'react-router-dom';
import { Router } from './Router';
import { theme } from './theme/theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <DailyBackgroundProvider>
        <BackgroundProvider>
          <Navbar />
          <RouterProvider router={Router} />
        </BackgroundProvider>
      </DailyBackgroundProvider>
    </MantineProvider>
  );
}
