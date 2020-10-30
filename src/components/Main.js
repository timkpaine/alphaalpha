/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-state */
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/styles/withStyles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import InstructionDialog from './dialogs/InstructionDialog';
import Footer from './Footer';
import Topbar from './Topbar';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    background: 'url(house_wc_full.png) no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
  },
  grid: {
    marginTop: 10,
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)',
    },
  },
  paperMain: {
    minHeight: '50vh',
    width: '100%',
    textAlign: 'left',
    color: theme.palette.text.secondary,
    display: 'flex',
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },
  paper: {
    minHeight: 20,
    textAlign: 'left',
    color: theme.palette.secondary.dark,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },
  paperDark: {
    minHeight: 20,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, .9)',
  },
  mainTitle: {
    color: 'white',
  },
  title: {
    color: theme.palette.secondary.light,
    fontWeight: 'bold',
  },
  titleDark: {
    color: theme.palette.secondary.dark,
    fontWeight: 'bold',
  },
  titleLight: {
    color: theme.palette.primary.light,
    fontWeight: 'bold',
  },
  rangeLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(2),
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
  },
  outlinedButton: {
    textTransform: 'uppercase',
    margin: theme.spacing(1),
  },
  actionButton: {
    textTransform: 'uppercase',
    margin: theme.spacing(1),
    width: 152,
  },
  blockCenter: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  block: {
    padding: theme.spacing(2),
  },
  box: {
    marginBottom: 40,
    margin: 'auto',
    maxWidth: 1000,
  },
  boxMain: {
    width: '100%',
    minHeight: 300,
    margin: 'auto',
    textAlign: 'center',
    maxWidth: 1000,
  },
  inlining: {
    display: 'inline-block',
    marginRight: 10,
  },
  buttonBar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  noBorder: {
    borderBottomStyle: 'hidden',
  },
  loadingState: {
    opacity: 0.05,
  },
  loadingMessage: {
    position: 'absolute',
    top: '40%',
    left: '40%',
  },
});

class Main extends Component {
  constructor() {
    super();
    this.state = {
      aboutUsDialog: false,
      contactDialog: false,
    };
  }

  componentDidMount() {}

  openAboutUsDialog = () => {
    this.setState({ aboutUsDialog: true });
  }

  openClubDialog = () => {
    this.setState({ clubDialog: true });
  }

  openContactDialog = () => {
    this.setState({ contactDialog: true });
  }

  dialogClose = () => {
    this.setState({
      aboutUsDialog: false,
      contactDialog: false,
    });
  }

  render() {
    const { classes } = this.props;
    const { contactDialog } = this.state;
    return (
      <>
        <CssBaseline />
        <Topbar />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid item xs={12}>
              <Paper className={classes.paperMain}>
                <div className={classes.boxMain}>
                  <Typography style={{ fontWeight: 'bold' }} variant="h1" className={classes.mainTitle} gutterBottom>Alpha Alpha </Typography>
                  <Typography style={{ fontWeight: 'bold' }} variant="h2" color="primary" gutterBottom>ΒΘΠ</Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paperDark}>
                <div className={classes.box}>
                  <Typography variant="h3" className={classes.title} gutterBottom>
                    Welcome
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom color="primary">
                    Welcome to the homepage of the Alpha Alpha Chapter of Beta Theta Pi at
                    Columbia University in the City of New York.
                  </Typography>
                </div>
                <div className={classes.buttonBar}>
                  <Button color="secondary" variant="contained" className={classes.actionButton} component={Link} to="foundation">
                             Foundation
                  </Button>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <div className={classes.box}>
                  <Typography
                    variant="h3"
                    className={classes.titleLight}
                    gutterBottom
                  >
                    2020 Capital Campaign
                  </Typography>
                  <Typography variant="body1" gutterBottom color="primary">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                     fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                     culpa qui officia deserunt mollit anim id est laborum.
                  </Typography>
                </div>
                <div className={classes.buttonBar}>
                  <Button color="primary" variant="outlined" className={classes.actionButton} component={Link} to="contact">
                    Contact
                  </Button>
                </div>
              </Paper>
            </Grid>
          </Grid>
          <InstructionDialog
            open={contactDialog}
            onClose={
                       this.dialogClose
                     }
          />
        </div>
        {' '}
        <Footer />
      </>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Main));
