import Button, { type ButtonProps } from '@mui/material/Button';

const CustomButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default CustomButton;
