import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Autocomplete from  '../autocomplete';

function Page(props){
    return (
        <AppBar position="static">
            <ToolBar className="appbar">
                <Typography variant="h6" color="inherit">
                    Programax
                </Typography>

                <Autocomplete />

                <AccountCircle />
            </ToolBar>
        </AppBar>
    );
}

export default Page;