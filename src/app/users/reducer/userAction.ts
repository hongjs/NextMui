import { DispatchAction } from '@/types/appState';
import act from './actionType';

export const fetchUsers: DispatchAction = async (dispatch) => {
  dispatch({ type: act.FETCH_USER_PENDING });
  const response = await fetch('http://localhost:3000/api/users');
  const data = (await response.json()) as unknown[];
  dispatch({ type: act.FETCH_USER_COMPLETED, payload: data });
};
