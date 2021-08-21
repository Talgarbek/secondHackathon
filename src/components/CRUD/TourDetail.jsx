import { Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { tourContext } from '../contexty/TourContexts';
import { API } from '../helper/Helper';
import HotelCard from './HotelCard';
import './Detail.css'

const useStyles = makeStyles((theme) => ({
    title: {
        // marginTop: 250
    },
    color: {
        backgroundColor:"#41cadd2e",
        color: "#fff",
        marginTop: 120,
        
    },
    inpstyle: {
        display:"flex",
        flexDirection:"column",
        backgroundColor: "rgb(32 166 159)",
        color: 'black',
        width: 400,
        margin: 7
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor:"#0e2625",
        color: "wheat"
    }
}))
const TourDetail = () => {
    const classes = useStyles()
    const {id} = useParams()
    const {getDetail, tourDetail,getTours} = useContext(tourContext)
    const [flag, setFlag] = useState(false);
    const [tour,setTour] = useState({
        hotels: []
    })
    const [hotel, setHotel] = useState({
        name: "",
        des: "",
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
        getTours()
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
        <div className={classes.color}>
            <Typography className={classes.title} variant="h2">
                {tour.title}
            </Typography>
          <TextField className={classes.inpstyle} placeholder="image" name="image" onChange={(e) => handleInp(e)}/>  
          <TextField className={classes.inpstyle} placeholder="name" name="name" onChange={(e) => handleInp(e)}/>  
          <TextField className={classes.inpstyle} placeholder="price" name="price" onChange={(e) => handleInp(e)}/>  
          <TextField className={classes.inpstyle} placeholder="description" name="des" onChange={(e) => handleInp(e)}/> 
          <TextField className={classes.inpstyle} placeholder="contact" name="contact" onChange={(e) => handleInp(e)}/>  
          <Button className={classes.button}onClick={()=> saveHotel(hotel,id,tour)}>Save</Button>
          <Grid container justify="center">
            {/* {
                tour.hotels.map(item => (
                    <div>
                        <HotelCard item={item}/>
                    </div>
                ))
            } */}
          </Grid>
        </div>
    );
};

export default TourDetail;