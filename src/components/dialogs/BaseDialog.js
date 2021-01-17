/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Dialog, DialogContent, DialogContentText, DialogTitle,
} from '@material-ui/core';

const styles = (theme) => ({
  container: {
    maxWidth: 600,
    flexGrow: 1,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  bottomMargin: {
    marginBottom: theme.spacing(2),
  },
  stepsContainer: {},
});

// eslint-disable-next-line react/prefer-stateless-function
class BaseDialog extends Component {
  render() {
    const {
      classes, open, onClose, children,
    } = this.props;
    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        scroll="body"
      >
        <DialogTitle id="alert-dialog-title" />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className={classes.container}>
              {children}
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  }
}

BaseDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.any,
};

BaseDialog.defaultProps = {
  open: false,
  children: [],
};

export default withStyles(styles)(BaseDialog);
