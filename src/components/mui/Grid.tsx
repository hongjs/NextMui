import Grid, { type GridProps } from '@mui/material/Grid';

const CustomGrid: React.FC<GridProps> = ({ children, ...props }) => {
  return <Grid {...props}>{children}</Grid>;
};

export default CustomGrid;
