import Typography, { type TypographyProps } from '@mui/material/Typography';

const CustomTypography: React.FC<TypographyProps> = ({
  children,
  ...props
}) => {
  return <Typography {...props}>{children}</Typography>;
};

export default CustomTypography;
