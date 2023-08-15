import { default as act } from '@/reducers/actionTypes';
import { IAction } from '@/types/appState';

export const fetchPhotos: IAction = async (dispatch) => {
  dispatch({ type: act.FETCH_PHOTO_PENDING });
  const response = await fetch('http://localhost:3000/api/photos');
  const data = (await response.json()) as unknown[];
  dispatch({ type: act.FETCH_PHOTO_COMPLETED, payload: data });
};
