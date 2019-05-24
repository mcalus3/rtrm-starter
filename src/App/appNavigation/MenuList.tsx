import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      backgroundColor: theme.palette.background.paper
    }
  })
);

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      <List component="nav">
        <ListItem button={true}>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button={true}>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem
          button={true}
          component="a"
          href="https://github.com/mcalus3/rtrm-starter"
        >
          <ListItemText primary="Go to Github page" />
        </ListItem>
      </List>
    </div>
  );
};
