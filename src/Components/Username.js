import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';



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
}));

function Username() {
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
    console.log(event)
    setUsername(event.target.value);
  }

  const handleSubmit = (event) => {
    console.log(event)
    setNewUsername(username)
    handleClose()
    event.preventDefault();
  }


  return (
    <>
      <div>
        <button type="button" onClick={handleOpen}>
          Select Username
        </button>
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
              <form onSubmit={(event) => handleSubmit(event)}>
                <label>
                  Username:
                  <input type="text" name="username" value={username} onChange={(event) => handleChange(event)} />
                </label>
                <input type="submit" value="Submit" />
              </form>

            </div>
          </Fade>
        </Modal>
      </div>

      {newUsername === '' ? <h1>Welcome</h1> : <h1>Welcome, {newUsername}!</h1>}
    </>

  )

}

export default Username;