import { Box, Typography } from '@/components/mui';

const Buttons = () => {
  return (
    <main>
      <div>
        <Typography gutterBottom variant="h3" color="primary" sx={{ fontWeight: 600 }}>
          Typography
        </Typography>

        <Box component="div" sx={{ display: 'flex', gap: '16px', pb: '32px' }}>
          <Typography gutterBottom variant="h4" color="primary.light" sx={{ fontWeight: 700 }}>
            Light:
          </Typography>
          <Typography gutterBottom variant="h4" color="primary.light" sx={{ fontWeight: 600 }}>
            Primary
          </Typography>
          <Typography gutterBottom variant="h4" color="secondary.light" sx={{ fontWeight: 600 }}>
            Secondary
          </Typography>
          <Typography gutterBottom variant="h4" color="tertiary.light" sx={{ fontWeight: 600 }}>
            Tertiary
          </Typography>
          <Typography gutterBottom variant="h4" color="quaternary.light" sx={{ fontWeight: 600 }}>
            Quaternary
          </Typography>
        </Box>
        <Box component="div" sx={{ display: 'flex', gap: '16px', pb: '32px' }}>
          <Typography gutterBottom variant="h4" color="primary" sx={{ fontWeight: 700 }}>
            Main:
          </Typography>
          <Typography gutterBottom variant="h4" color="primary" sx={{ fontWeight: 600 }}>
            Primary
          </Typography>
          <Typography gutterBottom variant="h4" color="secondary" sx={{ fontWeight: 600 }}>
            Secondary
          </Typography>
          <Typography gutterBottom variant="h4" color="tertiary.main" sx={{ fontWeight: 600 }}>
            Tertiary
          </Typography>
          <Typography gutterBottom variant="h4" color="quaternary.main" sx={{ fontWeight: 600 }}>
            Quaternary
          </Typography>
        </Box>
        <Box component="div" sx={{ display: 'flex', gap: '16px', pb: '32px' }}>
          <Typography gutterBottom variant="h4" color="primary.dark" sx={{ fontWeight: 700 }}>
            Dark:
          </Typography>
          <Typography gutterBottom variant="h4" color="primary.dark" sx={{ fontWeight: 600 }}>
            Primary
          </Typography>
          <Typography gutterBottom variant="h4" color="secondary.dark" sx={{ fontWeight: 600 }}>
            Secondary
          </Typography>
          <Typography gutterBottom variant="h4" color="tertiary.dark" sx={{ fontWeight: 600 }}>
            Tertiary
          </Typography>
          <Typography gutterBottom variant="h4" color="quaternary.dark" sx={{ fontWeight: 600 }}>
            Quaternary
          </Typography>
        </Box>
      </div>
    </main>
  );
};

export default Buttons;
