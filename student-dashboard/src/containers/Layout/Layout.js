import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer : false
    }

    siteDrawerHandler=() => {
        this.setState({showSideDrawer: false});
    }
    manageSideDrawerHandler = () => {
        this.setState({showSideDrawer: true});
    }


    render(){
        return(
            <Auxiliary>
                <Toolbar clicked = {this.manageSideDrawerHandler}/>
                <SideDrawer showBackdrop = {this.state.showSideDrawer} closed = {this.siteDrawerHandler}/>
                <main className ={ classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>

        );
    }
}


export default Layout;