import { Box, Button, Typography } from '@/components/mui';
import { RefreshOutlined as RefreshIcon } from '@mui/icons-material';

const Buttons = () => {
  return (
    <main>
      <div>
        <Typography gutterBottom variant="h3" color="primary" sx={{ fontWeight: 600 }}>
          Button
        </Typography>
        <Box component="div" sx={{ display: 'flex', gap: '16px', pb: '32px' }}>
          <Button variant="contained" color="primary" size="large">
            Primary
          </Button>
          <Button variant="contained" color="secondary" size="medium">
            Secondary
          </Button>
          <Button variant="contained" color="tertiary" size="medium">
            Tertiary
          </Button>
          <Button variant="contained" color="quaternary" size="medium">
            Quaternary
          </Button>
          <Button variant="contained" disabled size="small">
            Disabled
          </Button>
        </Box>
        <Box component="div" sx={{ display: 'flex', gap: '16px', pb: '32px' }}>
          <Button variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" color="tertiary" size="medium">
            Tertiary
          </Button>
          <Button variant="outlined" color="quaternary" size="medium">
            Quaternary
          </Button>
          <Button variant="outlined" disabled>
            Disabled
          </Button>
        </Box>
        <Box component="div" sx={{ display: 'flex', gap: '16px', pb: '32px' }}>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="tertiary" size="medium">
            Tertiary
          </Button>
          <Button color="quaternary" size="medium">
            Quaternary
          </Button>
          <Button disabled>Disabled</Button>
        </Box>
        <Box component="div" sx={{ display: 'flex', gap: '16px', pb: '32px' }}>
          <Button variant="contained" color="primary" size="large" startIcon={<RefreshIcon />}>
            Large
          </Button>
          <Button variant="contained" color="primary" size="medium" startIcon={<RefreshIcon />}>
            Medium
          </Button>
          <Button variant="contained" color="primary" size="small" startIcon={<RefreshIcon />}>
            Small
          </Button>
        </Box>
      </div>
    </main>
  );
};

export default Buttons;
