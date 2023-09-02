'use client';

import { Spinner } from '@/components';
import { Grid } from '@/components/mui';
import { usePhoto } from '@/hooks';
import PostCard from './PhotoCard';

const PhotoContainer: React.FC = () => {
  const { loading, photos } = usePhoto();
  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <Grid container spacing={2}>
          {photos.map((i) => {
            return (
              <Grid key={i.id} item xs={12} md={4} lg={3}>
                <PostCard data={i} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
};
export default PhotoContainer;
