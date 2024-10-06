import { Box, Card, CardContent, Typography } from '@mui/material';

type ArticleCardProps = {
  title: string;
  fromToday: string;
  userName: string;
};

// 関数のカリー化: omit 関数はカリー化されており、複数の引数を一つずつ受け取るように設計されています。
// つまり、omit(text)(len)(ellipsis) の形式で呼び出します。
// これにより、一部の引数を固定して再利用しやすくなります。
const omit = (text: string) => (len: number) => (ellipsis: string) =>
  text.length >= len ? text.slice(0, len - ellipsis.length) + ellipsis : text;

const ArticleCard = (props: ArticleCardProps) => {
  return (
    <Card>
      <CardContent>
        <Typography
          component='h3'
          sx={{
            mb: 2,
            minHeight: 48,
            fontSize: 16,
            fontWeight: 'bold',
            lineHeight: 1.5
          }}
        >
          {omit(props.title)(45)('...')}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: 12 }}>{props.userName}</Typography>
          <Typography sx={{ fontSize: 12 }}>{props.fromToday}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
