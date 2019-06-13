import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
   let attachedClasses = [classes.SideDrawer, classes.Close];
   if(props.showBackdrop) {
    attachedClasses = [classes.SideDrawer, classes.Open];
   }

    return(
        <Auxiliary>
            <Backdrop show= {props.showBackdrop} clicked = {props.closed}/>
            <div className= {attachedClasses.join(' ')} >
            <div className = {classes.Logo}>
            <Logo/>
            </div>
            <nav className = {classes.DesktopOnly}>
                <NavigationItems/>
            </nav>
            
        </div>
        </Auxiliary>
    );
};

export default sideDrawer;