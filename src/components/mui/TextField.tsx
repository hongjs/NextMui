import TextField, { type TextFieldProps } from '@mui/material/TextField';

const CustomTextField: React.FC<TextFieldProps> = ({ children, ...props }) => {
  return <TextField {...props}>{children}</TextField>;
};

export default CustomTextField;
