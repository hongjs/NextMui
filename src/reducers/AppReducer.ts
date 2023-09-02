import { PhotoReducer, initialState as photoState } from '@/app/photos/reducer/PhotoReducer';
import { UserReducer, initialState as userState } from '@/app/users/reducer/UserReducer';
import type { AppReducerType, AppState } from '@/types/appState';
import { AuthReducer, initialState as authState } from './AuthReducer';

export const AppReducer: AppReducerType = (state, action) => {
  return {
    ...state,
    auth: AuthReducer(state.auth, action),
    user: UserReducer(state.user, action),
    photo: PhotoReducer(state.photo, action),
  };
};

export const initialState: AppState = {
  auth: authState,
  user: userState,
  photo: photoState,
};
