import React from 'react';
import Logo from '../../assets/logo.svg';
import './styles.scss';

function Nav() {
  return (
    <nav className="navbar is-white" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <img src={Logo} alt="Logo da Click Cargo" />
      </div>
    </nav>
  );
}

export default Nav;
