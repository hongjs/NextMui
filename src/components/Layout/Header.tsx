import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@/components/mui';
import { Menu as MenuIcon } from '@mui/icons-material';
import Link from 'next/link';

const Header: React.FC<Props> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <Typography variant="h6" component="div" sx={{ color: '#fff', fontWeight: 600 }}>
              Home
            </Typography>
          </Link>
          <Box sx={{ pl: '16px' }}>
            <Link href="/posts">
              <Typography component="div" variant="h6" sx={{ color: '#fff', fontWeight: 600 }}>
                Post
              </Typography>
            </Link>
          </Box>
          <Box sx={{ pl: '16px' }}>
            <Link href="/photos">
              <Typography component="div" variant="h6" sx={{ color: '#fff', fontWeight: 600 }}>
                Photo
              </Typography>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
