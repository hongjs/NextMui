/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import NextAuth, { NextAuthOptions } from 'next-auth';
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
    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'kminchelle',
        password: '0lelplR',
      }),
    });

    const user = await res.json();
    user.name = `${user.firstName} ${user.lastName}`;

    if (user) {
      return user;
    } else {
      return null;
    }
  },
});

export const authOptions: NextAuthOptions = {
  providers: [provider],
  secret: process.env.JWT_SECRET,
  pages: {
    // signIn: '/auth/signin',
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
