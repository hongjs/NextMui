import { Dispatch } from 'react';

export interface IAppState {
  photo: IPhotoItem;
}

export interface IPhotoState {
  photo: IPhotoItem;
}

export interface AuthState {
  userId: string;
  token: string;
}

export interface AppContextProps {
  state: IAppState;
  dispatch: Dispatch<ReducerAction>;
}

export type IAppReducer = (state: IAppState, action: ReducerAction) => IAppState;
export type IAuthReducer = (state: AuthState, action: ReducerAction) => AuthState;
export type IPhotoReducer = (state: IPhotoState, action: ReducerAction) => IPhotoState;

interface ReducerAction {
  type: string;
  payload?: unknown;
}

export type IAction = (dispatch: Dispatch<ReducerAction>) => Promise<void>;

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
