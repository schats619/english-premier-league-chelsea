import { IntlShape, injectIntl } from "react-intl";
import React, { Component } from "react";
import { WithStyles, createStyles, withStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import MatchesTable from "../../components/data-table/MatchesTable";

const styles = () =>
  createStyles({
    content: {
      flexGrow: 1,
      width: "100%",
    },
  });
interface MatchesProps extends WithStyles<typeof styles> {
  intl: IntlShape;
  userId: string;
}

type MatchesState = {
  openPasswordDialog: boolean;
};

class Matches extends Component<MatchesProps, MatchesState> {
  state: MatchesState;

  constructor(props: MatchesProps) {
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
          <Paper elevation={1}>
            <div>
              <Typography variant="h5" component="div" gutterBottom>
                {intl.formatMessage({ id: "header.matches" })}
              </Typography>
            </div>
            <MatchesTable></MatchesTable>
          </Paper>
        </div>
      </div>
    );
  }
}
export default injectIntl(withStyles(styles)(Matches));
