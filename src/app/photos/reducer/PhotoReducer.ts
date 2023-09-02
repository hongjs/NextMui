import type { Photo, PhotoReducerType, PhotoState } from '@/types/appState';
import act from './actionType';

export const PhotoReducer: PhotoReducerType = (state, action) => {
  switch (action.type) {
    case act.FETCH_PHOTO_PENDING: {
      return { ...state, loading: true };
    }

    case act.FETCH_PHOTO_COMPLETED: {
      return {
        ...state,
        loading: false,
        items: action.payload as Photo[],
      };
    }

    default: {
      return state;
    }
  }
};

export const initialState: PhotoState = {
  items: [],
  loading: false,
};
