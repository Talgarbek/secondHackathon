import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { TableCell, TableRow } from '@material-ui/core';
import './Detail.css'

const useStyles = makeStyles({
  root: {
      backgroundColor: '#2063d4a3',
      color: '#f9fafb',
      fontSize: 18,
      display: 'inline-block',
  },
  price: {
      fontSize: 24,
  },
  des: {
      fontSize: 16
  },
});

export default function HotelCard({item}) {
  const classes = useStyles();

  return (
    <TableRow key={item.id} className={classes.root}>
        <div className="foto"><TableCell><img className="foto" src={item.image} /></TableCell></div>
        <div className="nameprice"><TableCell style={{fontSize:'26px'}} align="right">Название: {item.name}</TableCell>
        <TableCell className={classes.price} align="right">Цена: {item.price}$</TableCell></div>
        <span><TableCell className={classes.des} align="right">{item.description}</TableCell></span>
        <div className='contact'><TableCell style={{fontSize:"22px"}} align="right">Адрес:  {item.contact}</TableCell></div>
        <div className='button'><Button className='knopka'>Заказать</Button></div>
    </TableRow>
  );
}
