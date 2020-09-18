import React, { Fragment } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

//Material components
import BottomNavigation from '@material-ui/core/BottomNavigation/BottomNavigation';
import BottonNavigationAction from '@material-ui/core/BottomNavigationAction/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import BallotIcon from '@material-ui/icons/Ballot';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const Footer = () => {
  return(
    <Fragment>
      <BottomNavigation showLabels className="footer-container">
        <BottonNavigationAction component={Link} to="/categorias" label="Categorías" icon={<HomeIcon />} className="footer-icon" />
        <BottonNavigationAction component={Link} to="/catalogo" label="Catálogo" icon={<BallotIcon />} className="footer-icon" />
        <BottonNavigationAction component={Link} to="/carrito" label="Carrito" icon={<AddShoppingCartIcon /> } className="footer-icon" />
      </BottomNavigation>
    </Fragment>
  )
};

export default Footer;