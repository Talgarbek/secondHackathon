import { IconButton, Paper, makeStyles, TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { tourContext } from '../contexty/TourContexts';


const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        margin: '40px auto',
        maxWidth: 1000,
        height: 'auto'
    },
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '40ch',
        }}
}))
const Add = () => {
    const classes = useStyles()
    let history = useHistory()
    const [values, setValues] = useState({
        image: '',
        title: '',
        price: '',
        description: '',
        hotels: []
    })

    const { addTour } = useContext(tourContext)

    const handleInp = (e) => {
        let obj = {
            ...values,
            [e.target.name] : e.target.value
        }
        setValues(obj)
    }

    const handleSave = () => {
        if(!values.image) values.image = "https://picsum.photos/200/300"
        addTour(values)
        history.push('/')
    }

    return (
        <Paper elevation={3} className={classes.paper} style={{background: '#44814e'},{color:'#fff'},{height:'100%'},{marginTop:'120px'}}>
                <h1 style={{textAlign: 'center'}}>Добавить тур</h1>
                <div style={{display: 'flex', justifyContent: 'space-around', color: 'black'}}>
                    <div>
                        <img style={{width: '400px'}} src={values.image ? values.image : "https://images.unsplash.com/photo-1528127269322-539801943592?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG91cnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"} alt="smartphone image"/>
                    </div>

                    <div
                        style={{
                            width: '450px',
                            display:'flex',
                            alignItems:'center',
                            flexDirection:'column',
                            justifyContent:'center'
                        }}>
                        <form className={classes.root} noValidate autoComplete='off'>
                            <TextField name='image' onChange={handleInp} value={values.image} variant='outlined' label='Image' />
                            <TextField name='title' onChange={handleInp} value={values.title} variant='outlined' label='Title' />
                            <TextField name='price' onChange={handleInp} value={values.price} variant='outlined' label='Price' />
                            <TextField name='description' onChange={handleInp} value={values.description} variant='outlined' label='Description' />
                        </form>
                        <IconButton aria-label="share" onClick={handleSave}>
                            <Button variant="contained" color="#2c6335">Добавить</Button>
                        </IconButton>
                    </div>

                </div>
        </Paper>
    );
};

export default Add;