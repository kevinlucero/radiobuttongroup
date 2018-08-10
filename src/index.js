import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from '../app/main';


ReactDOM.render(
    <MuiThemeProvider>
        <Main />
    </MuiThemeProvider>, 
document.getElementById('root'));