import React from 'react';
import classes from './ManageSideDrawer.css'

const manageSideDrawer = (props) => {
    return(
        <div className= {classes.ManageSideDrawer}onClick = {props.clicked} >
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default manageSideDrawer;