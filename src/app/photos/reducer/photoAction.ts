import { DispatchAction } from '@/types/appState';
import act from './actionType';

export const fetchPhotos: DispatchAction = async (dispatch) => {
  dispatch({ type: act.FETCH_PHOTO_PENDING });
  const response = await fetch('http://localhost:3000/api/photos');
  const data = (await response.json()) as unknown[];
  dispatch({ type: act.FETCH_PHOTO_COMPLETED, payload: data });
};
