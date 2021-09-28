import React, { Component } from "react";
import {
  Theme,
  WithStyles,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";

import Navigation from "../components/navigation/Navigation";
import Taskbar from "./menu/Taskbar";

const styles = (theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    top: {
      display: "flex",
      padding: theme.spacing(3, 2),
    },
    main: {
      display: "flex",
      flexGrow: 1,
      position: "absolute",
      top: 64,
      right: 0,
      bottom: 0,
      left: 0,
    },
  });

type RootProps = WithStyles<typeof styles>;

type RootState = {
  navigationOpen: boolean;
  notificationsOpen: boolean;
};

class Root extends Component<RootProps, RootState> {
  state: RootState;

  constructor(props: RootProps) {
    super(props);
    this.state = {
      navigationOpen: false,
      notificationsOpen: false,
    };
  }

  onNavMenuClick = () => {
    this.setState((prevState) => ({
      navigationOpen: !prevState.navigationOpen,
    }));
  };

  render() {
    const { classes } = this.props;
    const { navigationOpen } = this.state;

    const onPropertiesButtonClick = () => {
      this.setState((prevState) => ({
        navigationOpen: !prevState.navigationOpen,
      }));
    };

    return (
      <React.Fragment>
        <Taskbar onEPLIconClick={this.onNavMenuClick} />
        <div className={classes.main}>
          <Navigation
            onPropertiesOpenStatusChange={onPropertiesButtonClick}
            open={navigationOpen}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Root);
