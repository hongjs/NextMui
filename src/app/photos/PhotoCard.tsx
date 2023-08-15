'use client';
import { Card, CardContent, CardMedia, Typography } from '@/components/mui';
import { IPhoto } from '@/types/appState';
import Image from 'next/image';

interface PostCardProps {
  data: IPhoto;
}
const photoCard: React.FC<PostCardProps> = ({ data }) => {
  return (
    <Card>
      <CardMedia>
        <Image src={'/images/dummy.jpeg'} height={200} width={300} alt={data.title} />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="primary">
          {data.title}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default photoCard;
