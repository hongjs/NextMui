'use client';

import { Box } from '@/components/mui';
import { signIn } from 'next-auth/react';
import LoginForm from './LoginForm';

const LoginPage = () => {
  // const { data: session } = useSession();

  // useEffect(() => {
  //   if (!session) {
  //     // redirect('/');
  //   }
  // }, [session]);

  const handleLoginClick = (username: string, password: string) => {
    void signIn('credentials', {
      redirect: false,
      username,
      password,
    }).then((res) => {
      if (!res?.error) {
      }
    });
  };

  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url('/images/bg.webp')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backhroundPosition: 'bottom',
          width: '100vw',
          height: '100vh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <LoginForm onLogin={handleLoginClick} />
        </Box>
      </Box>
    </div>
  );
};

export default LoginPage;
