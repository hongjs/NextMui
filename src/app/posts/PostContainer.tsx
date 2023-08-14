import { Grid } from '@/components/mui';
import { IPost } from '@/types/appState';
import PostCard from './PostCard';

interface PostContainerProps {
  data: IPost[];
}
const PostContainer: React.FC<PostContainerProps> = ({ data }) => {
  return (
    <>
      <Grid container spacing={2}>
        {data.map((i) => {
          return (
            <Grid key={i.id} item xs={12} md={4} lg={3}>
              <PostCard data={i} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default PostContainer;
