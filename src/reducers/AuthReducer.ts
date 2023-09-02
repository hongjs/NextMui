import { authAction as act } from '@/reducers/actionTypes';
import type { AuthReducerType, AuthState } from '@/types/appState';

export const AuthReducer: AuthReducerType = (state, action) => {
  switch (action.type) {
    case act.LOGIN_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }

    case act.LOGIN_COMPLETED: {
      return {
        ...state,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
};

export const initialState: AuthState = {
  userId: null,
  token: null,
  loading: false,
  errorMessage: null,
};
