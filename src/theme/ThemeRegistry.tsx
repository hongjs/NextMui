'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import themeOptions from './ThemeOptions';

const ThemeRegistry: React.FC<Props> = ({ children }) => {
  return (
    // <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
    <ThemeProvider theme={themeOptions}>
      <CssBaseline />
      {children}
    </ThemeProvider>
    // </NextAppDirEmotionCacheProvider>
  );
};

export default ThemeRegistry;
