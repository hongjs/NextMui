import { authOptions } from '@/app/api/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Buttons from './home/Buttons';
import Typographys from './home/Typographys';
import UserInfo from './home/UserInfo';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect('/api/auth/signin');
  } else {
    return (
      <main>
        <div>
          <UserInfo />

          <Buttons />
          <Typographys />
        </div>
      </main>
    );
  }
}
