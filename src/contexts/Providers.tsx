import { ThemeRegistry } from '@/theme';
import AppContextWrapper from './AppContext';
import NextAuthProvider from './NextAuthProvider';

const Providers: React.FC<Props> = ({ children }: Props) => {
  return (
    <NextAuthProvider>
      <AppContextWrapper>
        <ThemeRegistry>{children}</ThemeRegistry>
      </AppContextWrapper>
    </NextAuthProvider>
  );
};

export default Providers;
