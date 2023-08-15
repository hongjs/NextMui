import { Dispatch } from 'react';

export interface IAppState {
  photo: IPhotoItem;
}

export interface AppContextProps {
  state: IAppState;
  dispatch: Dispatch<IAppReducerAction>;
}

export type IAppReducer = (state: IAppState, action: IAppReducerAction) => IAppState;

interface IAppReducerAction {
  type: string;
  payload?: unknown;
}

export type IAction = (dispatch: Dispatch<IAppReducerAction>) => Promise<void>;

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface IPhotoItem {
  items: IPhoto[];
  loading: boolean;
}
