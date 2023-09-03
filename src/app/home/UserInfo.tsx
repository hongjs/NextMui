'use client';

import { Button } from '@/components/mui';
import { signOut, useSession } from 'next-auth/react';

const UserInfo = () => {
  const { data: session } = useSession();
  const handleLogout = () => {
    void signOut();
  };

  console.log('session', session);

  return (
    <div>
      <span>{session?.user?.name != null ? session?.user?.name : '-'}</span>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default UserInfo;
