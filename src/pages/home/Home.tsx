import { IntlShape, injectIntl } from "react-intl";
import React, { Component } from "react";
import { WithStyles, createStyles, withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const styles = () =>
  createStyles({
    content: {
      flexGrow: 1,
      width: "100%",
    },
  });
interface HomeProps extends WithStyles<typeof styles> {
  intl: IntlShape;
  userId: string;
}

type HomeState = {
  openPasswordDialog: boolean;
};

class Home extends Component<HomeProps, HomeState> {
  state: HomeState;

  constructor(props: HomeProps) {
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
          <Paper>
            <div>
              <h1>Home</h1>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}
export default injectIntl(withStyles(styles)(Home));
