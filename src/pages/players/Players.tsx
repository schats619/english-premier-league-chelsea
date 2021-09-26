import { IntlShape, injectIntl } from "react-intl";
import React, { Component } from "react";
import { WithStyles, createStyles, withStyles } from "@material-ui/core/styles";

const styles = () =>
  createStyles({
    content: {
      flexGrow: 1,
      width: "100%",
    },
  });
interface PlayersProps extends WithStyles<typeof styles> {
  intl: IntlShape;
  userId: string;
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
    const { classes } = this.props;
    return (
      <div className={classes.content}>
        <div>
          <h1>Players</h1>
        </div>
      </div>
    );
  }
}
export default injectIntl(withStyles(styles)(Players));
