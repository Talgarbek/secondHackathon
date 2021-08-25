import { makeStyles } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { tourContext } from '../contexty/TourContexts';
import './Favorites.css'

const useStyles = makeStyles({
    table: {
      display: 'inline-block',
      minWidth: 700,
      color: '#fff'
    },
    paper: {
      display: 'inline-block',
      maxWidth: 1100,
      margin: '130px auto',
      backgroundColor: '#0d6efd',
      color: '#fff'
    }
  });

const Favorite = () => {
    const classes = useStyles()
    const {fav, getFav} = useContext(tourContext)

    useEffect(() => {
        getFav()
    }, [])
    return (
        <TableContainer component={Paper} className={classes.paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell>Изображение</TableCell>
            <TableCell align="right">Название</TableCell>
            <TableCell align="right">Описание</TableCell>
            <TableCell align="right">Цена</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {fav?.tours ? (
                <>
                    {fav.tours.map((elem) => {
                        return (
                            <TableRow key={elem.item.id}>
                                {console.log(elem.item.image, 'here')}
                                <div><TableCell><img className='fotka' src={elem.item.image} alt={elem.item.title}/></TableCell></div>
                                <TableCell align="right" variant="h3">{elem.item.title}</TableCell>
                                <TableCell align="right">{elem.item.description}</TableCell>
                                <TableCell align="right">{elem.item.price}$</TableCell>
                            </TableRow>
                        )
                    })}
                </>
            ) : (<h1>Loading...</h1> )
        }
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default Favorite;