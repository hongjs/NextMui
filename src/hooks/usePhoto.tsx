import { fetchPhotos } from '@/app/photos/actions/photoAction';
import { useAppContext } from '@/hooks';
import { useCallback } from 'react';

const usePhoto = () => {
  const { state, dispatch } = useAppContext();

  const handleFetchPhotos = useCallback(() => {
    void fetchPhotos(dispatch);
  }, [dispatch]);

  return { fetchPhotos: handleFetchPhotos, photos: state.photo.items, loading: state.photo.loading };
};

export default usePhoto;
