import { Container } from '@/components/mui';

const PublicLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

export default PublicLayout;
