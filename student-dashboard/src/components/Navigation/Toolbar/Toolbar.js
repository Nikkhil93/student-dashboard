import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ManageSideDrawer from '../SideDrawer/ManageSideDrawer/ManageSideDrawer';


const toolbar = (props) => {
    return(
    <header className= {classes.Toolbar}>
        <ManageSideDrawer clicked= {props.clicked}/>
        <div className= {classes.Logo}>
            <Logo/>
        </div>
        <nav className= {classes.DesktopOnly}>
           <NavigationItems/>
        </nav>
        
    </header>
    )
};



export default toolbar;