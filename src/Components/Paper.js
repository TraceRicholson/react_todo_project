import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

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


export default function SimplePaper() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paperBackground}>TEST</Paper>
      <Paper elevation={3} />
      <Paper elevation={3} />
      <Paper elevation={3} />
      <Paper elevation={3} />
      <Paper elevation={3} />
      <Paper elevation={3} />
      <Paper elevation={3} />
      <Paper elevation={3} />
    </div>
  );
}

