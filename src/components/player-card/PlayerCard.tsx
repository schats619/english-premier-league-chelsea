import { IntlShape, injectIntl } from "react-intl";
import React, { Component, useState } from "react";
import {
  Theme,
  WithStyles,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";
import {
  Avatar,
  CardContent,
  CardHeader,
  Tooltip,
  Typography,
} from "@material-ui/core";
import NumbersIcon from "@mui/icons-material/LooksOne";
import Card from "@mui/material/Card";
import ExpandableItem from "./ExpandableItem";
import CardList from "./CardList";
import { red, blue } from "@material-ui/core/colors";
import InfoIcon from "@mui/icons-material/Info";
import FlagIcon from "@mui/icons-material/Flag";
import {
  CardActions,
  IconButton,
  CardMedia,
  Collapse,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  ListItemAvatar,
  Drawer,
  Toolbar,
} from "@mui/material";

const avatarBgColor = red[500];
const avatarJersyNoBgColor = blue[600];
const drawerWidth = "360px";
const styles = (theme: Theme) =>
  createStyles({
    content: {
      width: "100%",
      height: "80%",
      position: "absolute",
      overflowY: "auto",
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
    header: {
      float: "left",
      margin: 5,
    },
    innerContainer: {
      height: "80%",
      top: 15,
      marginLeft: 20,
      position: "relative",
    },
    card: {
      minHeight: 100,
      display: "inline-grid",
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 15,
    },
    cardActions: {
      float: "right",
    },
    infoButton: {
      position: "relative",
      bottom: 60,
      left: 389,
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

interface PlayerCardProps extends WithStyles<typeof styles> {
  intl: IntlShape;
  model: any;
  inline?: boolean;
}

type PlayerCardState = {
  propertiesModel: any;
  open: boolean;
};

class PlayerCard extends Component<PlayerCardProps, PlayerCardState> {
  state: PlayerCardState;

  constructor(props: PlayerCardProps) {
    super(props);
    this.state = { open: false, propertiesModel: this.props.model };
  }

  onPropertiesPanelClose() {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  }

  onPropertiesPanelLulakuClose() {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  }

  onHandleExpanded = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  };

  onHandleExpandedTest = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes, intl, model, inline } = this.props;
    const { open, propertiesModel } = this.state;

    const drawerClasses: any = {};

    if (inline) {
      drawerClasses.paper = `${classes.drawerPaper} ${
        open ? null : classes.drawerPaperClose
      }`;
    }
    return (
      <div className={classes.content}>
        <div className={classes.innerContainer}>
          {CardList.map((prop, key) => {
            return (
              <>
                <Card
                  sx={{ width: 425 }}
                  className={classes.card}
                  key={prop.id}
                >
                  <CardHeader
                    avatar={
                      <Avatar
                        variant="circle"
                        style={{ backgroundColor: avatarBgColor }}
                      >
                        {prop.playerInitial}
                      </Avatar>
                    }
                    title={prop.playerName}
                    action={
                      <Avatar
                        variant="circle"
                        style={{ backgroundColor: avatarJersyNoBgColor }}
                      >
                        {prop.jerseyNumber}
                      </Avatar>
                    }
                  />
                  <CardMedia
                    component="img"
                    sx={{ height: "412px" }}
                    image={prop.playerImage}
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary">
                      {intl.formatMessage({ id: prop.playerPosition })}
                    </Typography>
                  </CardContent>
                  <CardActions
                    key={prop.id}
                    className={classes.cardActions}
                  ></CardActions>

                  <ExpandableItem
                    render={(props) => (
                      <>
                        <IconButton
                          className={classes.infoButton}
                          onClick={() => props.setOpen(!props.open)}
                        >
                          <InfoIcon />
                        </IconButton>
                        <Collapse in={props.open} timeout="auto" unmountOnExit>
                          <CardContent>
                            <List
                              sx={{
                                width: "100%",
                                maxWidth: 360,
                                bgcolor: "background.paper",
                                display: "flex",
                              }}
                            >
                              <ListItem>
                                <ListItemAvatar>
                                  <Avatar>
                                    <NumbersIcon />
                                  </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                  primary="Age"
                                  secondary={prop.playerAge}
                                />
                              </ListItem>
                              <ListItem>
                                <ListItemAvatar>
                                  <Avatar>
                                    <FlagIcon />
                                  </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                  primary="Nationality"
                                  secondary={prop.nationality}
                                />
                              </ListItem>
                            </List>
                          </CardContent>
                        </Collapse>
                      </>
                    )}
                  />
                  {/* <Drawer
                      anchor="right"
                      className={
                        !inline ? classes.drawer : classes.drawerInline
                      }
                      classes={drawerClasses}
                      variant={inline ? "permanent" : "temporary"}
                      onClose={this.onHandleExpanded}
                      open={open}
                    >
                      <div className={classes.drawer}>
                        <ToolbarWithAdjustedGutters>
                          <IconButton onClick={this.onHandleExpanded}>
                            <ChevronRightIcon />
                          </IconButton>
                          <Typography variant="h6" noWrap>
                            {prop.playerName}
                          </Typography>
                        </ToolbarWithAdjustedGutters>
                      </div>
                    </Drawer> */}
                </Card>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}
export default injectIntl(withStyles(styles)(PlayerCard));
