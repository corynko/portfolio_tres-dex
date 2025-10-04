import { createContext, useContext, useMemo } from 'react';
import { useMantineColorScheme } from '@mantine/core';
import darkBg1 from '../assets/png/darkBg/darkBg1.jpg';
import darkBg2 from '../assets/png/darkBg/darkBg2.jpg';
import darkBg3 from '../assets/png/darkBg/darkBg3.jpg';
import darkBg4 from '../assets/png/darkBg/darkBg4.jpg';
import darkBg5 from '../assets/png/darkBg/darkBg5.jpg';
import darkBg6 from '../assets/png/darkBg/darkBg6.jpg';
import darkBg7 from '../assets/png/darkBg/darkBg7.jpg';
// Import your background images
import lightBg1 from '../assets/png/lightBg/lightBg1.jpg';
import lightBg2 from '../assets/png/lightBg/lightBg2.jpg';
import lightBg3 from '../assets/png/lightBg/lightBg3.jpg';
import lightBg4 from '../assets/png/lightBg/lightBg4.jpg';
import lightBg5 from '../assets/png/lightBg/lightBg5.jpg';
import lightBg6 from '../assets/png/lightBg/lightBg6.jpg';
import lightBg7 from '../assets/png/lightBg/lightBg7.jpg';

// Background arrays - index 0 = Monday, 6 = Sunday
const lightBgArray = [lightBg1, lightBg2, lightBg3, lightBg4, lightBg5, lightBg6, lightBg7];
const darkBgArray = [darkBg1, darkBg2, darkBg3, darkBg4, darkBg5, darkBg6, darkBg7];

const DailyBackgroundContext = createContext(null);

export function DailyBackgroundProvider({ children }) {
  const { colorScheme } = useMantineColorScheme();

  const dailyBackground = useMemo(() => {
    // Get current day (0 = Sunday, 1 = Monday, etc.)
    const today = new Date().getDay();

    // Convert to Monday-first indexing (0 = Monday, 6 = Sunday)
    const dayIndex = today === 0 ? 6 : today - 1;

    // Select the appropriate array based on theme
    const bgArray = colorScheme === 'dark' ? darkBgArray : lightBgArray;

    return {
      light: lightBgArray[dayIndex],
      dark: darkBgArray[dayIndex],
    };
  }, []); // Empty dependency array - only calculate once on mount

  return (
    <DailyBackgroundContext.Provider value={dailyBackground}>
      {children}
    </DailyBackgroundContext.Provider>
  );
}

export function useDailyBackground() {
  const context = useContext(DailyBackgroundContext);
  if (context === null) {
    throw new Error('useDailyBackground must be used within DailyBackgroundProvider');
  }
  return context;
}
