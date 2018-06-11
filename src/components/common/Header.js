import React ,{PropTypes} from 'react';
import {Link, IndexLink } from 'react-router';

const Header = () =>{
  return (
    <nav>
      <IndexLink to="/" activeClassName="acitve"> Home </IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active"> About </Link>
      {" | "}
      <Link to="/courses" activeClassName="active"> courses </Link>
      
    </nav>
  );
};

export default Header;
