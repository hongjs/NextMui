import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from './api/auth/[...nextauth]/route';
import Buttons from './home/Buttons';
import Typographys from './home/Typographys';
import UserInfo from './home/UserInfo';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session === null) {
    return redirect('api/auth/signin');
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
