import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Paper, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    verticalContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1
    },
    paper: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
);

export default () => {
  const classes = useStyles();

  const [text, setText] = useState('Click the button');

  const changeText = () => {
    setText(
      Math.random()
        .toString(36)
        .substring(7)
    );
  };

  return (
    <div className={classes.verticalContainer}>
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h3">
          {text}
        </Typography>
        <Button variant="contained" onClick={changeText}>
          Change Text
        </Button>
      </Paper>
    </div>
  );
};
