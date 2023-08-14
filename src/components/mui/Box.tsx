import Box, { type BoxProps } from '@mui/material/Box';

const CustomBox: React.FC<BoxProps> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};

export default CustomBox;
