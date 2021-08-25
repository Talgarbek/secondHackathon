import { Grid, Button,makeStyles, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { API } from '../helper/Helper';
import { useAuth } from '../contexty/AuthContext'
import CircularProgress from '@material-ui/core/CircularProgress';
import ComentsCard from './CommentCard'
import { useContext } from 'react';
import { tourContext } from '../contexty/TourContexts';

const useStyles = makeStyles((theme) => ({
    comentWindow: {
        width: 600,
        height: 150,
        border: 'solid 4px blue',
        padding: 10,
        overflow: 'scroll',
        marginTop: 10,
    },
    root: {
        display: 'flex',
        '& > * + *': {
          marginLeft: theme.spacing(2),
        },
      },
    input: {
        width: 550
    }
}))
const Coments = () => {
    const classes = useStyles()
    const {currentUser} = useAuth()
    const { getTours, tourDetail, getDetail, } = useContext(tourContext)
    const [value, setValue] = useState('')
    const {id} = useParams()
    const history = useHistory()
    const [product, setProduct] = useState('')
    const [coment, setComent] = useState('')
    const handleInp = (e) => {
        let coment = {
            comment: e.target.value,
            user: currentUser.email
        }
        setComent(coment)
        setValue(e.target.value)
    }
    useEffect(()=> {
        getDetail(id)
    },[])
    const addComent = async(id) => {
        console.log(id)
        tourDetail.comments.push(coment)
        setProduct(tourDetail)
        const data = await axios.patch(`${API}/tours/${id}`,product)
        getTours(history)
        setValue('')
    }
        
    // const dar = new Date(date,hours)
    // console.log(dar)
    return (
        <>
       
        <Grid container justify="center" alignContent='center'>
            <Grid className={classes.comentWindow}>
            {tourDetail.comments ? (tourDetail.comments.map((item) => (
                <ComentsCard item={item}/>
            ))
            ) : (
                <div className={classes.root}>
                <CircularProgress color="secondary" />
              </div>
            )}
            </Grid>
        </Grid>
        <Grid container display='flex' justifyContent='center'>
            <TextField value={value}className={classes.input} onChange={handleInp}/>
            <Button onClick={() => addComent(id)}>Отправить</Button>
        </Grid>

          
        </>
    );
};

export default Coments;