import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { tourContext } from '../contexty/TourContexts';
import Edit from '../CRUD/EditTour';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './Tour.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    minWidth: 400,
    marginBottom: 20,
    borderRadius: 18,
    backgroundColor: '#b4e9fe',
    color: 'rgb(11, 10, 29)'
  },
  media: {
    height: 250,
  },
});


export default function TourCard({item, history}) {
  const { deleteTour, editTour, addTourInCard, checkTourInFav } = useContext(tourContext)
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    editTour(item.id)
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='cardd'>
      <Card 
      className={classes.root}
    >
      <CardActionArea>
        <CardMedia
          onClick={()=>history.push(`/detail/${item.id}`)}
          className={classes.media}
          image={item.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {item.price}$
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color: 'rgb(11, 10, 29)'}}>
            {item.description.substring(0, 130)}...
          </Typography>
        </CardContent>
      </CardActionArea>
      <Edit open={open} handleClose={handleClose} handleOpen={handleOpen} />
      <CardActions>
        <Button size="small" color="primary">
          Заказать
        </Button>
        <Button onClick={()=>handleOpen()}>
          Изменить
        </Button>
        <Button aria-label="share" onClick={() => deleteTour(item.id, history)}>
          Удалить
        </Button>
        <Button
          aria-label="share" 
          onClick={() => addTourInCard(item)}
          color={checkTourInFav(item.id) ? "secondary" : "light"}
          >
           <FavoriteIcon/>
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}
