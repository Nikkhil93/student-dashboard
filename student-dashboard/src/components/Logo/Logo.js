import React from 'react';

import burgeLogo from '../../assets/Images/favicon.ico';
import classes from './Logo.css';

const logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={burgeLogo} alt="GrandBurger" />
  </div>
);

export default logo;
