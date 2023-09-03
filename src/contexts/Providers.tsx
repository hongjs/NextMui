'use client';

import { ThemeRegistry } from '@/theme';
import AppContextWrapper from './AppContext';

import { SessionProvider } from 'next-auth/react';

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
