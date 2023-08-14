import IconButton, { type IconButtonProps } from '@mui/material/IconButton';

const CustomIconButton: React.FC<IconButtonProps> = ({
  children,
  ...props
}) => {
  return <IconButton {...props}>{children}</IconButton>;
};

export default CustomIconButton;
