import { Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { tourContext } from '../contexty/TourContexts';
import { API } from '../helper/Helper';
import HotelCard from './HotelCard';

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: 250
    },
    color: {
        color: "#fff"
    }
}))
const TourDetail = () => {
    const classes = useStyles()
    const {id} = useParams()
    const {getDetail, tourDetail,getTours} = useContext(tourContext)
    const [tour,setTour] = useState({

    })
    const [hotel, setHotel] = useState({
        name: "",
        des: "",
        price: 0,
        contact: "",
        image: ""
    })
    const handleInp = (e) => {
        let obj = {
            ...hotel,
            [e.target.name]: e.target.value
        }
        setHotel(obj)
    }
    console.log(hotel)
    console.log(tour)
    const saveHotel = async(tour,hotel,id) => {
        tour.hotels.push(hotel)
        console.log(tour)
        // const data = await axios.patch(`${API}/tours/${id}`,tour)
        getTours()
    }
 
    useEffect(()=>{
        getDetail(id)
    },[])
    useEffect(() => {
        setTour(tourDetail)
    },[tourDetail])
   
    return (
        <div className={classes.color}>
            <Typography className={classes.title} variant="h2">
                {tour.title}
            </Typography>
          <TextField name="name" onChange={(e) => handleInp(e)}/>  
          <TextField name="des" onChange={(e) => handleInp(e)}/> 
          <TextField name="price" onChange={(e) => handleInp(e)}/>  
          <TextField name="image" onChange={(e) => handleInp(e)}/>  
          <TextField name="contact" onChange={(e) => handleInp(e)}/>  
          <Button className={classes.color}onClick={()=> saveHotel(hotel,id,tour)}>Save</Button>
          <Grid container justify="center">
            {
                tour.hotels.map(item => (
                    <HotelCard item={item}/>
                ))
            }
          </Grid>
        </div>
    );
};

export default TourDetail;