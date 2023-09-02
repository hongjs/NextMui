import { ThemeRegistry } from '@/theme';
import AppContextWrapper from './AppContext';

const Providers: React.FC<Props> = ({ children }: Props) => {
  return (
    <AppContextWrapper>
      <ThemeRegistry>{children}</ThemeRegistry>
    </AppContextWrapper>
  );
};

export default Providers;
