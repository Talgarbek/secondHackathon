import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    card: {
        marginTop: 10,
        width: '1200px',
        height: 350,
        backgroundColor: '#6ed7826e',
        borderRadius: 15,

    }
}) )
const HotelCard = ({item}) => {
    const classes = useStyles()
    return (
        <Grid className={classes.card}>
            <Typography>
                {item.image}
            </Typography>
            <Typography>
                {item.name}
            </Typography>
            <Typography>
                {item.price}$
            </Typography>
            <Typography>
                {item.des.substring(0, 150)}...
            </Typography>
            <Typography>
                {item.contact}
            </Typography>
        </Grid>
    );
};

export default HotelCard;