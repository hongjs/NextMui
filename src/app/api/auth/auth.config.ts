import { User } from '@/types/next-auth';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const provider = CredentialsProvider({
  id: 'credentials',
  name: 'Credentials',
  credentials: {
    username: {
      label: 'Username',
      type: 'text',
    },
    password: {
      label: 'Password',
      type: 'password',
    },
  },
  async authorize(credentials, req) {
    console.log(credentials, req);
    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'kminchelle',
        password: '0lelplR',
      }),
    });

    const user = (await res.json()) as User;
    user.name = `${user.firstName} ${user.lastName}`;

    if (user) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return
      return user as any;
    } else {
      return null;
    }
  },
});

const authOptions: NextAuthOptions = {
  providers: [provider],
  secret: process.env.JWT_SECRET,
  pages: {
    // signIn: '/auth/signin',
  },
};

export default authOptions;
