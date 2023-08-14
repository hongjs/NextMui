import AppBar, { type AppBarProps } from '@mui/material/AppBar';

const CustomAppBar: React.FC<AppBarProps> = ({ children, ...props }) => {
  return <AppBar {...props}>{children}</AppBar>;
};

export default CustomAppBar;
