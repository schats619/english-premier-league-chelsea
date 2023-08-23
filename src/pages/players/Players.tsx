import { IntlShape, injectIntl } from "react-intl";
import React, { Component } from "react";
import { WithStyles, createStyles, withStyles } from "@material-ui/core/styles";
import PlayerCard from "../../components/player-card/PlayerCard";
import { Paper, Typography } from "@mui/material";

const styles = () =>
  createStyles({
    content: {
      flexGrow: 1,
      width: "100%",
    },
    header: {
      position: "relative",
      left: 32,
    },
  });
interface PlayersProps extends WithStyles<typeof styles> {
  intl: IntlShape;
  userId: string;
  model?: any;
}

type PlayersState = {
  openPasswordDialog: boolean;
};

class Players extends Component<PlayersProps, PlayersState> {
  state: PlayersState;

  constructor(props: PlayersProps) {
    super(props);
    this.state = {
      openPasswordDialog: false,
    };
  }

  render() {
    const { classes, intl, model } = this.props;
    return (
      <div className={classes.content}>
        <div className={classes.header}>
          <Typography variant="h5" component="div" gutterBottom>
            {intl.formatMessage({ id: "header.players" })}
          </Typography>
        </div>
        <PlayerCard model={model} />
      </div>
    );
  }
}
export default injectIntl(withStyles(styles)(Players));
