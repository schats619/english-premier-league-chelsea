import { IntlShape, injectIntl } from "react-intl";
import React, { Component } from "react";
import {
  Theme,
  WithStyles,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";
import CardList from "../player-card/CardList";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: "0 24px 24px 24px",
      margin: theme.spacing(1),
    },
    textField: {
      minWidth: "275px",
    },
    inputLabel: {
      fontSize: "80%",
    },
    dataTable: {
      width: "275px",
      marginTop: "5px",
    },
  });

interface PropertiesUnknownContentProps extends WithStyles<typeof styles> {
  intl: IntlShape;
  model: any;
}

class PropertiesUnknownContent extends Component<PropertiesUnknownContentProps> {
  render() {
    const { classes, intl } = this.props;
    const findName = CardList.filter((element) => element.id == 1).map(
      (element) => element.playerName
    );
    const readOnly = true;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <h1>{findName}</h1>
        </div>
      </React.Fragment>
    );
  }
}
export default injectIntl(withStyles(styles)(PropertiesUnknownContent));
