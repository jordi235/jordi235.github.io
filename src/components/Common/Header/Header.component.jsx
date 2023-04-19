import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => (
  <AppBar position="sticky" className="navbar">
    <Toolbar className="navbar__container">
      <Link to="/" className="navbar__title-link text-white">
        <h1 variant="h4" color="inherit" className='navbar__title'>
          Przeglądarka gier
        </h1>
      </Link>
      <div>
        <Link to="/genres" className="navbar__item">
          <Typography variant="button" color="inherit" style={{fontWeight: 'bold'}}>
            Gatunki
          </Typography>
        </Link>
        <Link to="/platforms" className="navbar__item">
          <Typography variant="button" color="inherit" style={{fontWeight: 'bold'}}>
            Platformy
          </Typography>
        </Link>
        <Link to="/publishers" className="navbar__item">
          <Typography variant="button" color="inherit" style={{fontWeight: 'bold'}}>
            Wydawcy
          </Typography>
        </Link>
      </div>
    </Toolbar>
  </AppBar>
)

export default Header;
