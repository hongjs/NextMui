import { Card, CardContent, Typography } from '@/components/mui';
import { Post } from '@/types/appState';

interface PostCardProps {
  data: Post;
}
const PostCard: React.FC<PostCardProps> = ({ data }) => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="primary">
          {data.title}
        </Typography>
        <Typography variant="body2" color="secondary">
          {data.body}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default PostCard;
