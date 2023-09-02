import { RefreshOutlined as RefreshIcon } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';

const Buttons = () => {
  return (
    <main>
      <div>
        <Typography id="label" gutterBottom variant="h3" color="primary" sx={{ fontWeight: 600 }}>
          Button
        </Typography>
        <Box component="div" sx={{ display: 'flex', gap: '16px', pb: '32px' }}>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="tertiary">
            Tertiary
          </Button>
          <Button variant="contained" color="quaternary">
            Quaternary
          </Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
        </Box>
        <Box component="div" sx={{ display: 'flex', gap: '16px', pb: '32px' }}>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="tertiary">Tertiary</Button>
          <Button color="quaternary">Quaternary</Button>
          <Button disabled>Disabled</Button>
        </Box>
        <Box component="div" sx={{ display: 'flex', gap: '16px', pb: '32px' }}>
          <Button variant="text" color="primary">
            Primary
          </Button>
          <Button variant="text" color="secondary">
            Secondary
          </Button>
          <Button variant="text" color="tertiary">
            Tertiary
          </Button>
          <Button variant="text" color="quaternary">
            Quaternary
          </Button>
          <Button variant="text" disabled>
            Disabled
          </Button>
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
