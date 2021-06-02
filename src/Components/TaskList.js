import { Component } from 'react'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react'
import firebase from "firebase/app";
import 'firebase/firestore';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },

  },
  paperBackground: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    color: 'black',
    backgroundColor: '#ffecb3',
    border: 0,
    paddingTop: 0
  },
}));

function TaskList() {
  // let db = firebase.firestore();
  const classes = useStyles();
  const [inputValue, setInputValue] = useState([])
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('')
  const [newUsername, setNewUsername] = useState('')



  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    handleClose()
  }

  const onKeyUp = (event) => {
    if (event.charCode === 13) {
      let array = [...inputValue]
      array.push(event.target.value)
      setInputValue(array);

      // db.collection("users").doc().add({
      //   first: "Jacob",
      //   tasks: [],
      // })
      //   .then((docRef) => {
      //     console.log("Document written with ID: ", docRef.id);
      //   })
      //   .catch((error) => {
      //     console.error("Error adding document: ", error);
      //   });
    }
  }

  const deleteListItem = (event, index) => {
    let array = [...inputValue]
    array.splice(index, 1)
    setInputValue(array)
  }


  const finishAll = () => {
    setInputValue([])
    handleOpen()
  }



  let itemList = inputValue.map((item, index) => <Paper elevation={3} className={classes.paperBackground} key={index} onClick={(event) => deleteListItem(event, index)}>{item}</Paper>)
  return (
    <>
      <label htmlFor="addItem">Add Item:</label>
      <input type="text" name="addItem" onKeyPress={onKeyUp} />
      <div className={classes.root}>
        {itemList}
      </div>
      <div>Finish all tasks?</div>

      <Button variant="contained" color="primary" onClick={finishAll}>Finish All!</Button>
      <div>
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
              <iframe src="https://giphy.com/embed/AsGnrla1K6FN7ajonc" width="480" height="390" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cooler-yes-thank-you-AsGnrla1K6FN7ajonc">via GIPHY</a></p>
            </div>
          </Fade>
        </Modal>
      </div>
    </>
  );
}



export default TaskList;