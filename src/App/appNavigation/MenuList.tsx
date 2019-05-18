import * as React from 'react';
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme
} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = (theme: Theme) =>
  createStyles({
    list: {
      backgroundColor: theme.palette.background.paper
    }
  });

type Props = {} & WithStyles<typeof styles>;

function SimpleList({ classes }: Props) {
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
}

export default withStyles(styles)(SimpleList);
