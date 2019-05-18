import * as React from 'react';
import {
  createStyles,
  WithStyles,
  withStyles,
  Theme
} from '@material-ui/core/styles';
import { State } from '../StateProvider';
import domainSlice, { SetTextAction } from './domainReducer';
import { Paper, Typography, Button } from '@material-ui/core';
// @ts-ignore
import { useSelector, useDispatch } from 'react-redux';

const styles = (theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1,
      flexShrink: 1
    },
    paper: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

type Props = {} & WithStyles<typeof styles>;

const ContentContainer = ({ classes }: Props) => {
  const text = useSelector((state: State) => state.domainState.text);
  const dispatch = useDispatch();
  const setText: (text: string) => SetTextAction = text =>
    dispatch(domainSlice.actions.setText({ text }));

  const changeText = () => {
    setText(
      Math.random()
        .toString(36)
        .substring(7)
    );
  };

  return (
    <div className={classes.container}>
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

export default withStyles(styles)(ContentContainer);
