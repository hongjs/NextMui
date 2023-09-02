import { fetchUsers } from '@/app/users/reducer/userAction';
import { useAppContext } from '@/hooks';
import { useCallback } from 'react';

const useUser = () => {
  const { state, dispatch } = useAppContext();

  const handleFetchUsers = useCallback(() => {
    void fetchUsers(dispatch);
  }, [dispatch]);

  return { fetchUsers: handleFetchUsers, users: state.user.items, loading: state.user.loading };
};

export default useUser;
