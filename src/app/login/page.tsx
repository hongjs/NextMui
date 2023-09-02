'use client';
import { Button } from '@/components/mui';
import { TextField } from '@mui/material';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

const LoginPage = () => {
  const [data, setData] = useState({ username: '', password: '' });

  const handleTextChange = (name: string, value: string) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginClick = () => {
    void signIn();
  };

  return (
    <>
      <TextField
        label="Username"
        value={data.username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleTextChange('username', e.target.value)}
      />
      <TextField
        label="password"
        type="password"
        value={data.password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleTextChange('password', e.target.value)}
      />
      <Button onClick={handleLoginClick}>Login</Button>
    </>
  );
};

export default LoginPage;
