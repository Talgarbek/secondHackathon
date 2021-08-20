import Modal from '@material-ui/core/Modal';
import { Button, IconButton, makeStyles, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { tourContext } from '../contexty/TourContexts';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    fontFamily: 'Cambria',
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    backgroundColor: '#b4e9fe'
  },
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  textfield: {
    marginBottom: 10
  }
}));


export default function Edit({open, handleClose}) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const rootRef = React.useRef(null);
  const history = useHistory()
  const {edit, saveEditTour} = useContext(tourContext)
  const [values, setValues] = useState(null)

  useEffect(() => {
    setValues(edit)
  }, [edit])


  const handleEditInp = (e) => {
    let obj = {
        ...values,
        [e.target.name] : e.target.value
    }
    setValues(obj)
  }

  const handleSave = () => {
    saveEditTour(values, history)
  }

    const body = (
      <div style={modalStyle} className={classes.paper} ref={rootRef}>
            <h4 id="server-modal-title" style={{marginBottom: 15}}>Изменить данные</h4>
            {
                values ? (
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField className={classes.textfield} name="image" onChange={handleEditInp} value={values.image} variant="outlined"/>
                        <TextField className={classes.textfield} name="title" onChange={handleEditInp} value={values.title} variant="outlined"/>
                        <TextField className={classes.textfield} name="price" onChange={handleEditInp} value={values.price} variant="outlined"/>
                        <TextField className={classes.textfield} name="description" 
                            onChange={handleEditInp} 
                            value={values.description} 
                            variant="outlined" 
                            gutterBottom 
                            multiline
                            rows={4}
                        />
                        <IconButton aria-label="share" onClick={() => handleSave()}>
                            <Button variant="contained" color="primary" onClick={() => handleClose()} >Сохранить</Button>
                        </IconButton>
                    </form>
                ) : (<h1>Wait mzfk...</h1> )
                
            }
      </div>
    );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
