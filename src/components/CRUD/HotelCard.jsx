import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    card: {
        width: 300,
        height: 300,
    }
}) )
const HotelCard = ({item}) => {
    const classes = useStyles()
    return (
        <Grid className={classes.card}>
            <Typography>
                {item.name}
            </Typography>
            <div>
                {item.price}$
            </div>
            <div>
                {item.image}
            </div>
        </Grid>
    );
};

export default HotelCard;