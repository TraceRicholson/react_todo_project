import { useState, useEffect, setState } from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../Styles/Username.css'
import TextField from '@material-ui/core/TextField';
import firebase from "firebase/app";
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBprxSwqar_kJT-O934XIhbg8YcQ01g5Kw",
  authDomain: "socal-golf-tour-2cf45.firebaseapp.com",
  databaseURL: "https://socal-golf-tour-2cf45-default-rtdb.firebaseio.com",
  projectId: "socal-golf-tour-2cf45",
  storageBucket: "socal-golf-tour-2cf45.appspot.com",
  messagingSenderId: "485371547044",
  appId: "1:485371547044:web:ecc692dab4ddbbf03cc531"
});


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  loginSubmit: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 4,
  }
}));

function Username(key, defaultValue) {
  let db = firebase.firestore();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('')
  const [newUsername, setNewUsername] = useState('')



  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  }

  const handleSubmit = (event) => {
    setNewUsername(username)
    handleClose()
    event.preventDefault();
    db.collection("users").doc(username).set({
      first: username,
      tasks: [],
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  const handleLogout = (event) => {
    setNewUsername('')
    setUsername('')
    event.preventDefault()
  }




  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              The Task List
            </Typography>
            <div>

              {newUsername === '' ? <Button color="inherit" type="button" onClick={handleOpen}>Login</Button> : <Button color="inherit" type="button" onClick={handleLogout}>Logout</Button>}

              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <div className={classes.paper}>
                    <form className={classes.loginSubmit} onSubmit={(event) => handleSubmit(event)}>
                      <TextField id="filled-basic" label="Username" variant="filled" value={username} onChange={(event) => handleChange(event)} />
                      <Button variant="contained" color="secondary" type="submit" onClick={handleOpen}>Submit</Button>
                    </form>

                  </div>
                </Fade>
              </Modal>
            </div>
          </Toolbar>
        </AppBar>
      </div>


      {newUsername === '' ? <h1 id="welcome-header">Welcome New User!!</h1> : <h1 id="welcome-header" className="myUserna">Welcome, {newUsername}!</h1>}

    </>


  )

}

export default Username;