import type { User, UserReducerType, UserState } from '@/types/appState';
import act from './actionType';

export const UserReducer: UserReducerType = (state, action) => {
  switch (action.type) {
    case act.FETCH_USER_PENDING: {
      return { ...state, loading: true };
    }

    case act.FETCH_USER_COMPLETED: {
      return {
        ...state,
        loading: false,
        items: action.payload as User[],
      };
    }

    default: {
      return state;
    }
  }
};

export const initialState: UserState = {
  items: [],
  loading: false,
};
