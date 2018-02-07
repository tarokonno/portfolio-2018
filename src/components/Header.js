import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../images/avatar.png';
import Logo from '../images/logo.png';

const Header = () => (
	<header className="site-navigation">
		<div className="identity">
		<img className="logo" src={Logo} alt="Avatar"/>
			<h1>TARO KONNO</h1>
			<h5>FRONT END DEVELOPER</h5>
		</div>
		<nav>
			<ul>
				<li><NavLink to='/portfolio-2018/about'>About</NavLink></li>
				<li><NavLink to='/portfolio-2018/portfolio'>Portfolio</NavLink></li>
				<li><NavLink to='/portfolio-2018/contact'>Contact</NavLink></li>
			</ul>
		</nav>
	</header>
)

export default Header;