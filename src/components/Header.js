import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../images/avatar.png';

const Header = () => (
	<header className="site-navigation">
		<div className="identity">
		<img className="avatar" src={Avatar} alt="Avatar"/>
			<h1>TARO KONNO</h1>
			<h5>FRONT END DEVELOPER</h5>
		</div>
		<nav>
			<ul>
				<li><NavLink exact to='/'>About</NavLink></li>
				<li><NavLink exact to='/portfolio'>Portfolio</NavLink></li>
				<li><NavLink exact to='/contact'>Contact</NavLink></li>
			</ul>
		</nav>
	</header>
)

export default Header;