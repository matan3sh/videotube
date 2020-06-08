import React from 'react';

const Navbar = ({ title, icon }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul></ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Minutetube',
  icon: 'fab fa-youtube-square',
};

export default Navbar;
