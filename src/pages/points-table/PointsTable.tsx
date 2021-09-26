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
interface PointsTableProps extends WithStyles<typeof styles> {
  intl: IntlShape;
  userId: string;
}

type PointsTableState = {
  openPasswordDialog: boolean;
};

class PointsTable extends Component<PointsTableProps, PointsTableState> {
  state: PointsTableState;

  constructor(props: PointsTableProps) {
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
          <h1>PointsTable</h1>
        </div>
      </div>
    );
  }
}
export default injectIntl(withStyles(styles)(PointsTable));
