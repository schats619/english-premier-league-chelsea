import { IconButton, Toolbar, Typography } from "@material-ui/core";
import { IntlShape, injectIntl } from "react-intl";
import React, { Component } from "react";
import {
  Theme,
  WithStyles,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Drawer from "@material-ui/core/Drawer";
import PropertiesContent from "../properties-content/PropertiesContent";
import MasonMountPropertiesContent from "../properties-content/MasonMountPropertiesContent";
import RomaluLukakuPropertiesPanel from "./RomaluLukakuPropertiesPanel";
import RomaluLukakuPropertiesContent from "../properties-content/RomaluLukakuPropertiesContent";

const drawerWidth = "360px";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      overflow: "hidden",
    },
    drawer: {
      width: drawerWidth,
      height: "100%",
    },
    drawerInline: {
      height: "100%",
    },
    drawerPaper: {
      position: "relative",
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      width: drawerWidth,
    },
    drawerPaperClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: 0,
    },
  });

const toolbarStyles = () =>
  createStyles({
    root: {
      paddingLeft: "12px",
      paddingRight: "0px",
    },
  });

const ToolbarWithAdjustedGutters = withStyles(toolbarStyles)(Toolbar);

interface PropertiesPanelProps extends WithStyles<typeof styles> {
  intl: IntlShape;
  open: boolean;
  model: any;
  type: any;
  inline?: boolean;
  onPropertiesOpenStatusChange?: () => void;
}

class PropertiesPanel extends Component<PropertiesPanelProps> {
  constructor(props: PropertiesPanelProps) {
    super(props);
    this.onHandleDrawerClose = this.onHandleDrawerClose.bind(this);
  }

  onHandleDrawerClose() {
    const { onPropertiesOpenStatusChange } = this.props;
    if (onPropertiesOpenStatusChange) {
      onPropertiesOpenStatusChange();
    }
  }

  render() {
    const { intl, classes, open, model, type, inline } = this.props;
    const drawerClasses: any = {};

    if (inline) {
      drawerClasses.paper = `${classes.drawerPaper} ${
        open ? null : classes.drawerPaperClose
      }`;
    }

    return (
      <Drawer
        anchor="right"
        className={!inline ? classes.drawer : classes.drawerInline}
        classes={drawerClasses}
        variant={inline ? "permanent" : "temporary"}
        onClose={this.onHandleDrawerClose}
        open={open}
      >
        <div className={classes.drawer}>
          <ToolbarWithAdjustedGutters>
            <IconButton onClick={this.onHandleDrawerClose}>
              <ChevronRightIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              {intl.formatMessage({ id: "properties.panel.heading." + type })}
            </Typography>
          </ToolbarWithAdjustedGutters>
          <PropertiesContent type={type} model={model} />
        </div>
      </Drawer>
    );
  }
}

export default injectIntl(withStyles(styles)(PropertiesPanel));
