import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@/components/mui';
import { Menu as MenuIcon } from '@mui/icons-material';
import Link from 'next/link';

const Header: React.FC<Props> = () => {
  const items = [
    { link: '/', text: 'Home' },
    { link: '/posts', text: 'Post' },
    { link: '/photos', text: 'Photo' },
    { link: '/users', text: 'Users' },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', gap: '16px', ml: '16px' }}>
            {items.map((item) => (
              <Link key={item.link} href={item.link}>
                <Typography variant="h6" component="div" sx={{ color: '#fff', fontWeight: 600 }}>
                  {item.text}
                </Typography>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
