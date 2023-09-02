import { Typography } from '@/components/mui';
import { type Post } from '@/types/appState';
import PostContainer from './PostContainer';

const PostsPage = async () => {
  const data = await fetchData();

  return (
    <>
      <Typography variant="h2" component="div" color="secondary" sx={{ fontWeight: 500 }}>
        Posts
      </Typography>
      <Typography gutterBottom variant="h5" component="div" color="secondary">
        Server side API
      </Typography>
      <PostContainer data={data} />
    </>
  );
};

const fetchData = async (): Promise<Post[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json() as unknown as Post[];
};

export default PostsPage;
