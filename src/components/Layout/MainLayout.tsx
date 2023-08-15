import { Container } from '@/components/mui';
import Header from './Header';

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ p: '32px', pt: '96px' }}>
        {children}
      </Container>
    </>
  );
};

export default MainLayout;
