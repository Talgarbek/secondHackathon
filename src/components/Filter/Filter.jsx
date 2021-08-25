import React, { useContext, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid, makeStyles, Button } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
// import './filter.css'
import { tourContext } from '../contexty/TourContexts';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Sortirovka = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const history = useHistory()
  const {getTours} = useContext(tourContext)
  const [title, setTitle] = useState(getType())
  const [price, setPrice] = useState(getPrice())

    function getPrice(){
        const search = new URLSearchParams(history.location.search)
        return search.get('price_lte')
    }

    function getType(){
        const search = new URLSearchParams(history.location.search)
        return search.get('title')
    }

    const handleChangePrice = (event, value) => {
        const search = new URLSearchParams(history.location.search)
        search.set('price_lte', value)
        history.push(`${history.location.pathname}?${search.toString()}`)
        getTours(history)
        setPrice(value)
    }

    const handleChangeType = (event) => {
        if(event.target.value === 'all'){
            history.push(`${history.location.pathname.replace('title')}`)
            getTours(history)
            setTitle(event.target.value)
            return
        }
        const search = new URLSearchParams(history.location.search)
        search.set('title', event.target.value)
        history.push(`${history.location.pathname}?${search.toString()}`)
        getTours(history)
        setTitle(event.target.value)
    }
    const handleDrop = () => {
        history.push(`${history.location.pathname.replace('title')}`)
        history.push(`${history.location.pathname.replace('price_lte')}`)
        getTours(history)
        setTitle(getType())
        setPrice(getPrice())
    }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="btn3" >
      <Button onClick={handleClickOpen} style={{backgroundColor: '#f50057'}}>Открыть сортировку</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Выберите тур</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl component="fieldset">
                <FormLabel component="legend">Континент</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={title} onChange={handleChangeType}>
                    <FormControlLabel value="Egypt" control={<Radio />} label="Egypt" />
                    <FormControlLabel value="Denmark" control={<Radio />} label="Denmark" />
                    <FormControlLabel value="China" control={<Radio />} label="China" />
                    <FormControlLabel value="Miami" control={<Radio />} label="Мiami" />
                    <FormControlLabel value="all" control={<Radio />} label="Все" />
                </RadioGroup>
                </FormControl>
            <Grid>
                <Slider
                    value={price}
                    onChange={handleChangePrice}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    min={150}
                    max={1700}
                />
                <Button variant='outlined' color='primary' onClick={handleDrop} >Сбросить</Button>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отмена
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Sortirovka