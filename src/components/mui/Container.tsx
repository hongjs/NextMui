import Container, { type ContainerProps } from '@mui/material/Container';

const CustomContainer: React.FC<ContainerProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default CustomContainer;
