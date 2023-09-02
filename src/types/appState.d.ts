import { Dispatch } from 'react';

export interface AppContextProps {
  state: AppState;
  dispatch: Dispatch<ReducerAction>;
}

export type AppReducerType = (state: AppState, action: ReducerAction) => AppState;
export type AuthReducerType = (state: AuthState, action: ReducerAction) => AuthState;
export type UserReducerType = (state: UserState, action: ReducerAction) => UserState;
export type PhotoReducerType = (state: PhotoState, action: ReducerAction) => PhotoState;
export type DispatchAction = (dispatch: Dispatch<ReducerAction>) => Promise<void>;

export interface ReducerAction {
  type: string;
  payload?: unknown;
}

export interface AppState {
  auth: AuthState;
  photo: PhotoState;
  user: UserState;
}

export interface AuthState {
  userId: string | null;
  token: string | null;
  loading: boolean;
  errorMessage: string | null;
}

export interface UserState {
  items: User[];
  loading: boolean;
}

export interface PhotoState {
  items: Photo[];
  loading: boolean;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
