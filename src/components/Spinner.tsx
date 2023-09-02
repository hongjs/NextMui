import { Box, CircularProgress } from '@/components/mui';

const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '70vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress size={32} />
    </Box>
  );
};

export default Loading;
