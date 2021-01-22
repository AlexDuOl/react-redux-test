import React, { Component } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import './styles.css'
import { Divider } from '@material-ui/core';

class Autocomplete extends Component {
    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
        };
    }

    render() {
        const {
            suggestions,
            onChangeText,
            onChangeSelection,
            text
        } = this.props;

        const {
            isOpen,
        } = this.state;
        
        return (
            <div className="main-container">
                <div className="container-icon">
                    <SearchIcon />
                </div>
                <InputBase 
                    placeholder="Search..."
                    value={text}
                    style={{width: '100%'}}
                    onChange={(event) => {
                        const newText = event.target.value;

                        onChangeText(newText);

                        if(!inOpen && newText){
                            
                        }
                    }}
                />
            </div>
        );
    }
}