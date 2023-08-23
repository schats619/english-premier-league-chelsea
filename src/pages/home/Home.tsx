import { IntlShape, injectIntl } from "react-intl";
import React, { Component } from "react";
import { WithStyles, createStyles, withStyles } from "@material-ui/core/styles";
import { Paper, Tooltip, Typography } from "@material-ui/core";

const styles = () =>
  createStyles({
    content: {
      flexGrow: 1,
      width: "100%",
    },
    header: {
      float: "left",
      margin: 5,
    },
    innerContainer: {
      height: "100%",
      width: "100%",
      top: 102,
      left: 10,
      position: "absolute",
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
    const { classes, intl } = this.props;
    return (
      <div className={classes.content}>
        <div>
          <Paper>
            <div>
              <Tooltip
                title={intl.formatMessage({ id: "epl.avatar.name" })}
                placement="bottom-start"
              >
                <Typography variant="h5" className={classes.header}>
                  {intl.formatMessage({ id: "header.home" })}
                </Typography>
              </Tooltip>
            </div>
            <div className={classes.innerContainer}>
              <Paper elevation={1}>
                <Typography variant="h6">
                  {intl.formatMessage({ id: "home.description" })}
                </Typography>
              </Paper>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}
export default injectIntl(withStyles(styles)(Home));
