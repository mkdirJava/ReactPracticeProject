import React ,{PropTypes} from 'react';
import {Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';


const Header = () =>{
  return (
    <nav>
      <IndexLink to="/" activeClassName="acitve"> Home </IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active"> About </Link>
      {" | "}
      <Link to="/courses" activeClassName="active"> courses </Link>
      <LoadingDots interval={100} dots={20}/>
    </nav>
  );
};

export default Header;
