import { Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { tourContext } from '../contexty/TourContexts';
import { API } from '../helper/Helper';
import HotelCard from './HotelCard';
import Comment from '../Comment/Comment'
import './Detail.css'

const useStyles = makeStyles((theme) => ({
    inputs: {
        backgroundColor: "rgb(141 244 247)",
        color: 'black',
        marginRight: 7,
        marginLeft: 10,
        borderRadius: 15
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor:"#0e2625",
        color: "wheat",
        margin: 10,
    }
}))
const TourDetail = () => {
    const classes = useStyles()
    const {id} = useParams()
    const {getDetail, tourDetail,getTours} = useContext(tourContext)
    const [flag, setFlag] = useState(false);
    const history = useHistory()
    const [tour,setTour] = useState({
        hotels: []
    })
    const [hotel, setHotel] = useState({
        name: "",
        description: "",
        price: 0,
        contact: "",
        image: ""
    })
    const saveHotel = async(hotel, id, tour) => {
        
        let arr = [...tour.hotels]
        console.log(arr, 'HERE')
        arr.push(hotel)
        let obj = {
            ...tour,
            hotels: arr
        }
        const data = await axios.patch(`${API}/tours/${id}`, obj)
        console.log(obj, 'testing')
        setFlag(prev => !prev)
        getTours(history)
    }
    const handleInp = (e) => {
        let obj = {
            ...hotel,
            [e.target.name]: e.target.value
        }
        setHotel(obj)
    }

 
    useEffect(()=>{
        getDetail(id)
    },[flag])
    useEffect(() => {
        setTour(tourDetail)
    },[tourDetail])
   
    return (
        <div className="detail">
            <Typography className={classes.title} variant="h2">
                {tour.title}
            </Typography>
          <TextField className={classes.inputs} name='image' onChange={handleInp} value={hotel.image} variant='outlined' placeholder="image"/>
          <TextField className={classes.inputs} name='name' onChange={handleInp} value={hotel.name} variant='outlined' placeholder="name"/>
          <TextField className={classes.inputs} name='price' onChange={handleInp} value={hotel.price} variant='outlined' placeholder="price"/>
          <TextField className={classes.inputs} name='description' onChange={handleInp} value={hotel.description} variant='outlined' placeholder="description"/>
          <TextField className={classes.inputs} name='contact' onChange={handleInp} value={hotel.contact} variant='outlined' placeholder="contact"/>
          <Button className={classes.button} onClick={()=> saveHotel(hotel,id,tour)}>Save</Button>
          <Grid container justify="center">
            {tour.hotels ? (
                tour.hotels.map(item => (
                    <div className="detail">
                        <HotelCard item={item}/>
                        <Comment/>
                    </div>
                )))
             : (<h1>Loading...</h1> )}
          </Grid>
        </div>
    );
};

export default TourDetail;