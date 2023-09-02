import { ReducerAction, IAppState, IPhotoState } from '@/types/appState';
import { AppReducer } from './AppReducer';
import { AuthReducer } from './AuthReducer';
import { PhotoReducer } from './PhotoReducer';

interface IReducerState {
  app: IAppState;
  photo: IPhotoState;
}
type IReducer = (state: IReducerState, action: ReducerAction) => IReducerState;

const combineReducers: IReducer = ({ app, photo }, action) => {
  return {
    app: AppReducer(app, action),
    photo: PhotoReducer(photo, action),
  };
};

export default combineReducers;
