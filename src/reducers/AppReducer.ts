export const FETCH_PHOTO_PENDING = 'FETCH_PHOTO_PENDING';
export const FETCH_PHOTO_COMPLETED = 'FETCH_PHOTO_COMPLETED';

import type { IAppReducer, IAppState } from '@/types/appState';

export const AppReducer: IAppReducer = (state, action) => {
  switch (action.type) {
    case FETCH_PHOTO_PENDING: {
      return { ...state, photo: { ...state.photo, loading: true } };
    }

    case FETCH_PHOTO_COMPLETED: {
      return { ...state, photo: { ...state.photo, loading: false, items: action.payload } };
    }

    default:
      return state;
  }
};

export const initialState: IAppState = {
  photo: {
    items: [],
    loading: false,
  },
};
