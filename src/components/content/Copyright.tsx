/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { Component } from "react";
import { Link, Typography } from "@material-ui/core";
import { IntlShape, injectIntl } from "react-intl";

interface CopyrightProps {
  intl: IntlShape;
}

interface CopyrightState {}

class Copyright extends Component<CopyrightProps, CopyrightState> {
  render() {
    const { intl } = this.props;
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {intl.formatMessage({ id: "copyright.message" })}
        {new Date().getFullYear()}
        {<span>&nbsp;</span>}
      </Typography>
    );
  }
}
export default injectIntl(Copyright);
