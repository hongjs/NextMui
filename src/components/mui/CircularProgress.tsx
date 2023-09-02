import CircularProgress, { type CircularProgressProps } from '@mui/material/CircularProgress';

const CustomCircularProgress: React.FC<CircularProgressProps> = ({ ...props }) => {
  return <CircularProgress {...props} />;
};

export default CustomCircularProgress;
