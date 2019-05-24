import React from 'react';
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import MenuList from './MenuList';

const packageJson = require('../../../package.json');
const version = packageJson.version;
const name = packageJson.name;

const useStyles = makeStyles({
  drawer: {
    maxWidth: 250
  }
});

type Props = {
  drawerVisible: boolean;
  setDrawerVisible: (value: boolean) => void;
};

export default ({ drawerVisible, setDrawerVisible }: Props) => {
  const classes = useStyles();

  return (
    <div>
      <SwipeableDrawer
        open={drawerVisible}
        onClose={() => setDrawerVisible(!drawerVisible)}
        onOpen={() => setDrawerVisible(!drawerVisible)}
        classes={{
          paper: classes.drawer
        }}
      >
        <List component="nav">
          <ListItem>
            <ListItemText primary={name} secondary={version} />
          </ListItem>
        </List>
        <Divider />

        <MenuList />
      </SwipeableDrawer>
    </div>
  );
};
