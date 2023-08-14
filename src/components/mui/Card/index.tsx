import Card, { type CardProps } from '@mui/material/Card';
import CardContent, { type CardContentProps } from '@mui/material/CardContent';
import CardMedia, { type CardMediaProps } from '@mui/material/CardMedia';

const CustomCard: React.FC<CardProps> = ({ children, ...props }) => {
  return <Card {...props}>{children}</Card>;
};

export const CustomCardContent: React.FC<CardContentProps> = ({ children, ...props }) => {
  return <CardContent {...props}>{children}</CardContent>;
};

export const CustomCardMedia: React.FC<CardMediaProps> = ({ children, ...props }) => {
  return <CardMedia {...props}>{children}</CardMedia>;
};

export default CustomCard;
