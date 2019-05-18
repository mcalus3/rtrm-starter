import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

import {
  withStyles,
  createStyles,
  Theme,
  WithStyles
} from '@material-ui/core/styles';
import { connect } from 'react-redux';
import appSlice, { AppActions } from './appReducer';
import { Dispatch } from 'redux';

const packageJson = require('../../../package.json');
const name = packageJson.name;

const styles = (theme: Theme) =>
  createStyles({
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    }
  });

type Props = { onToggleDrawer: () => void } & WithStyles<typeof styles>;

const NavBar = (props: Props) => {
  const { classes } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={props.onToggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          {name}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: Dispatch<AppActions>) => ({
  onToggleDrawer: () => {
    dispatch(appSlice.actions.toggleDrawer());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(NavBar));
