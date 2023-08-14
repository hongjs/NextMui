import { FETCH_PHOTO_COMPLETED, FETCH_PHOTO_PENDING } from '@/reducers/AppReducer';
import { Dispatch } from 'react';

export const fetchPhotos = async (dispatch: Dispatch<any>) => {
  dispatch({ type: FETCH_PHOTO_PENDING });
  const response = await fetch('http://localhost:3000/api/photos');
  const data = await response.json();
  dispatch({ type: FETCH_PHOTO_COMPLETED, payload: data });
};
