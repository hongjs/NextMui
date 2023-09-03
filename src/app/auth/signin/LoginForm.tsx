'use client';

import { Button, Grid, TextField, Typography } from '@/components/mui';
import { useState } from 'react';

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [credential, setCredential] = useState({ username: '', password: '' });

  const handleTextChange = (name: string, value: string) => {
    setCredential((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Grid container direction="column" spacing={4} sx={{ width: '500px' }}>
      <Grid item>
        <Typography component="span">Username</Typography>
        <TextField
          onChange={(event) => {
            handleTextChange('username', event.target.value);
          }}
          value={credential.username}
        />
      </Grid>
      <Grid item>
        <Typography component="span">Password</Typography>
        <TextField
          type="password"
          onChange={(event) => {
            handleTextChange('password', event.target.value);
          }}
          value={credential.password}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={() => onLogin(credential.username, credential.password)}>
          Sign in
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
