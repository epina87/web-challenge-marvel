import React from 'react';
import { NavLink } from 'react-router-dom'; 
import './styles/footer.scss';
import marvelLogo from '../img/marvel-logo.jpg'; 

const Footer = () => {
  
  return (
    <div className="footer" data-testid="test-id">
      <div>
        <NavLink to="/" className="favorites-link">
          <img src={marvelLogo} alt="Marvel Logo" className="logo" />
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
