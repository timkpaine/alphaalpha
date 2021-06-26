import './App.css';

// import {blueGrey} from '@material-ui/core/colors'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';

import Routes from './routes';

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    secondary: {
      main: '#0849A3',
    },
    primary: {
      main: '#fff',
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"montserrat"', '"roboto"', 'sans-serif'].join(','),
  },
}));

const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </div>
);

export default App;
