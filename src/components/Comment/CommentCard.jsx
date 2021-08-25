import { Button, makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { tourContext } from '../contexty/TourContexts';
import { API } from '../helper/Helper';
const useStyles = makeStyles((theme) => ({
    comment: {
        width: 300,
        height: 49,
        border: '2px solid black',
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'space-between'
    },
    users: {
        color: 'red'
    }
}))
const CommentsCard = ({item}) => {
    const classes = useStyles()
    const {getDetail} = useContext(tourContext)

    const deleteComment = async (id, history) => {
        await axios.delete(`${API}/detail/${id}`)
        getDetail(history)
    }

    return (
        <div className={classes.comment}>
            <div>
                <Typography className={classes.users}>
                    {item.user}
                </Typography>
                <Typography>
                {item.comment}
                </Typography>
            </div>
            <div>
                <Button onClick={deleteComment}>X</Button>
            </div>
        </div>
    );
};

export default CommentsCard;