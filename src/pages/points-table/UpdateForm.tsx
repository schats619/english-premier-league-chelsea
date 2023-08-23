import { IntlShape, injectIntl } from "react-intl";
import React, { Component } from "react";
import { WithStyles, createStyles, withStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import Modal from "@mui/material/Modal";

const styles = () =>
  createStyles({
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
    },
    innerContainer: {
      height: "100%",
      width: "100%",
      top: 102,
      left: 10,
      position: "absolute",
    },
  });

interface UpdateFormProps extends WithStyles<typeof styles> {
  intl: IntlShape;
  onOpenFormChange?: () => void;
  open: boolean;
}

class UpdateForm extends Component<UpdateFormProps> {
  constructor(props: UpdateFormProps) {
    super(props);
    this.onHandleFormModalClose = this.onHandleFormModalClose.bind(this);
  }

  onHandleFormModalClose() {
    const { onOpenFormChange } = this.props;
    if (onOpenFormChange) {
      onOpenFormChange();
    }
  }

  render() {
    const { intl, classes, open } = this.props;
    return (
      <div className={classes.content}>
        <Modal open={open} onClose={this.onHandleFormModalClose}>
          <div className={classes.innerContainer}>
            <Paper elevation={1}>
              <Typography variant="h6">
                {intl.formatMessage({ id: "home.description" })}
              </Typography>
            </Paper>
          </div>
        </Modal>
      </div>
    );
  }
}
export default injectIntl(withStyles(styles)(UpdateForm));
