import { IntlShape, injectIntl } from "react-intl";
import React, { Component } from "react";
import { RouteComponentProps, Link, withRouter } from "react-router-dom";

import {
  Theme,
  WithStyles,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import Routes from "../routes/Routes";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import NavigationItemIcon from "./NavigationItemIcon";

const drawerWidth = 260;

const styles = (theme: Theme) =>
  createStyles({
    drawerPaper: {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      zIndex: 1000,
      backgroundColor: "#555555",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shortest,
      }),
      overflowX: "hidden",
      overflowY: "hidden",
      "&:hover": {
        overflowY: "auto",
        width: drawerWidth,
      },
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    drawerPaperClose: {
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
    },
    list: {
      width: 260,
    },
  });

interface NavigationProps extends WithStyles<typeof styles> {
  intl: IntlShape;
  open: boolean;
  onPropertiesOpenStatusChange: () => void;
}

class Navigation extends Component<NavigationProps & RouteComponentProps> {
  onHandleDrawerClose() {
    this.props.onPropertiesOpenStatusChange();
  }

  render() {
    const { classes, open } = this.props;
    const depth = 0;

    const activeRoute = (routeName: any) => {
      return this.props.location.pathname === routeName ? true : false;
    };
    return (
      <Drawer
        variant="persistent"
        classes={{
          paper: `${classes.drawerPaper} ${
            open ? null : classes.drawerPaperClose
          }`,
        }}
        anchor="left"
        open={open}
        onClose={this.onHandleDrawerClose.bind(this)}
      >
        <div className={classes.list} role="presentation">
          {Routes.map((prop, key) => {
            return (
              <>
                <ListItem
                  button
                  component={Link}
                  // selected={activeRoute(prop.path)}
                  to={prop.path}
                  key={key}
                  onClick={this.onHandleDrawerClose.bind(this)}
                >
                  <ListItemIcon>
                    <NavigationItemIcon name={prop.icon} depth={depth} />
                  </ListItemIcon>
                  <ListItemText primary={prop.name} style={{ color: "#fff" }} />
                </ListItem>
              </>
            );
          })}
        </div>
      </Drawer>
    );
  }
}

export default injectIntl(withRouter(withStyles(styles)(Navigation)));
