import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';

function Cards({ photo }) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {photo?.map(item => {
        return (
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.url}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 fdsfd
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )
      })}
    </Box>
  );
}
export default Cards