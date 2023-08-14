import Toolbar, { type ToolbarProps } from '@mui/material/Toolbar';

const CustomToolbar: React.FC<ToolbarProps> = ({ children, ...props }) => {
  return <Toolbar {...props}>{children}</Toolbar>;
};

export default CustomToolbar;
