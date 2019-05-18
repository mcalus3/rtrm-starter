import * as React from 'react';
import {
  createStyles,
  WithStyles,
  withStyles,
  Theme
} from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { State } from '../StateModel';
import domainSlice, { DomainActions } from './domainReducer';
import { Paper, Typography, Button } from '@material-ui/core';
import { Dispatch } from 'redux';

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

type Props = { text: string; setText: (text: string) => void } & WithStyles<
  typeof styles
>;

const ContentContainer = (props: Props) => {
  const { classes } = props;

  const changeText = () => {
    props.setText(
      Math.random()
        .toString(36)
        .substring(7)
    );
  };

  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h3">
          {props.text}
        </Typography>
        <Button variant="contained" onClick={changeText}>
          Change Text
        </Button>
      </Paper>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  text: state.domainState.text
});

const mapDispatchToProps = (dispatch: Dispatch<DomainActions>) => ({
  setText: (text: string) => {
    dispatch(domainSlice.actions.setText({ text: text }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ContentContainer));
