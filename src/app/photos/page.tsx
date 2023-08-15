'use client';

import { Typography } from '@/components/mui';
import { usePhoto } from '@/hooks';
import { useEffect } from 'react';
import PhotoContainer from './PhotoContainer';

const PhotoPage = () => {
  const { fetchPhotos } = usePhoto();

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  return (
    <>
      <Typography variant="h2" component="div" color="secondary" sx={{ fontWeight: 500 }}>
        Photos
      </Typography>
      <Typography gutterBottom variant="h5" component="div" color="secondary">
        Client side API
      </Typography>

      <PhotoContainer />
    </>
  );
};

export default PhotoPage;
