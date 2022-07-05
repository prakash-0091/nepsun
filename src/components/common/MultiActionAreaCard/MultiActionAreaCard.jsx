import * as React from 'react';
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, CardContent, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function MultiActionAreaCard(props) {


  if (props.movie !== undefined) {
    return ( //,maxHeight:270,minHeight:230,
      <Card sx={{ minWidth: 260, maxWidth: 260, margin: 1, display: 'flex', flexDirection: 'column' }}>
        <CardActionArea component='Box' >
          <CardMedia
            component="img"
            height="50"

            image={'https://api.qfxcinemas.com/' + props.movie.thumbnailUrl}
            alt={toString(props.movie.thumbnailUrl)}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.movie.name}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
           {props.movie.annotation}
          </Typography> */}
          </CardContent>
        </CardActionArea>
        <Box flex={1} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}  >
          <Divider />
          <CardActions >
            <Button size="small" color="primary"  >
              Share
            </Button>
          </CardActions>
        </Box>
      </Card>
    );
  }
}
