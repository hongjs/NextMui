import { useAppContext } from '@/hooks';
import { fetchPhotos } from '@/reducers/actions/photoAction';
import { useCallback } from 'react';

const usePhoto = () => {
  const { state, dispatch } = useAppContext();

  const handleFetchPhotos = useCallback(() => {
    fetchPhotos(dispatch);
  }, [dispatch]);

  return { fetchPhotos: handleFetchPhotos, photos: state.photo.items, loading: state.photo.loading };
};

export default usePhoto;
