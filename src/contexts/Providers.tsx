'use client';

import { ThemeRegistry } from '@/theme';
import { SessionProvider } from 'next-auth/react';
import AppContextWrapper from './AppContext';

const Providers: React.FC<Props> = ({ children }: Props) => {
  return (
    <SessionProvider>
      <AppContextWrapper>
        <ThemeRegistry>{children}</ThemeRegistry>
      </AppContextWrapper>
    </SessionProvider>
  );
};

export default Providers;
