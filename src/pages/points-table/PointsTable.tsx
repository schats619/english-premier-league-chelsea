import { IntlShape, injectIntl } from "react-intl";
import React, { Component } from "react";
import { WithStyles, createStyles, withStyles } from "@material-ui/core/styles";
import { IconButton, Typography } from "@material-ui/core";

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
    const { classes, intl } = this.props;
    return (
      <div className={classes.content}>
        <div>
          <Typography variant="h4">
            {intl.formatMessage({ id: "points.table.header" })}
          </Typography>
        </div>
        <div></div>
      </div>
    );
  }
}
export default injectIntl(withStyles(styles)(PointsTable));
