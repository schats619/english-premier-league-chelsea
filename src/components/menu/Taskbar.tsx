import React, { Component } from "react";
import { IntlShape, injectIntl } from "react-intl";
import {
  Theme,
  withStyles,
  WithStyles,
  createStyles,
} from "@material-ui/core/styles";
import {
  AppBar,
  Avatar,
  IconButton,
  Toolbar,
  Tooltip,
} from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";
import { Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    appbar: {
      [theme.breakpoints.up("sm")]: {
        width: "100%",
      },
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    eplAvatar: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
  });

interface TaskbarProps extends WithStyles<typeof styles> {
  intl: IntlShape;
  onEPLIconClick: () => void;
}

type TaskbarState = {
  check: boolean;
  onClick: boolean;
};

class Taskbar extends Component<TaskbarProps, TaskbarState> {
  state: TaskbarState;
  constructor(props: TaskbarProps) {
    super(props);
    this.state = {
      check: true,
      onClick: false,
    };
  }

  render() {
    const { onEPLIconClick, classes, intl } = this.props;

    return (
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton onClick={onEPLIconClick} color="inherit">
            <MenuIcon />
          </IconButton>
          <Tooltip
            title={intl.formatMessage({ id: "epl.avatar.name" })}
            placement="bottom-start"
          >
            <Typography variant="h5" className={classes.title}>
              {intl.formatMessage({ id: "epl.avatar.name" })}
            </Typography>
          </Tooltip>
        </Toolbar>
      </AppBar>
    );
  }
}

export default injectIntl(withStyles(styles)(Taskbar));
