import { default as act } from '@/reducers/actionTypes';
import type { IPhoto, IPhotoReducer, IPhotoState } from '@/types/appState';

export const PhotoReducer: IPhotoReducer = (state, action) => {
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

export const initialState: IPhotoState = {
  photo: {
    items: [],
    loading: false,
  },
};
