/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { default as act } from '@/reducers/actionTypes';
import type { IAppReducer, IAppState, IPhoto } from '@/types/appState';

export const AppReducer: IAppReducer = (state, action) => {
  switch (action.type) {
    case act.FETCH_PHOTO_PENDING: {
      return { ...state, photo: { ...state.photo, loading: true } };
    }

    case act.FETCH_PHOTO_COMPLETED: {
      return {
        ...state,
        photo: { ...state.photo, loading: false, items: action.payload as IPhoto[] },
      };
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
