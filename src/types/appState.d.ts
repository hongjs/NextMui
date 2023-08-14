export interface IAppState {
  photo: IPhotoItem;
}

export type AppContextProps = {
  state: IAppState;
  dispatch: Dispatch<any>;
};

export type IAppReducer = (state: IAppState, action: IAppReducerAction) => IAppState;

interface IAppReducerAction {
  type: string;
  payload: any;
}

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
