import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../images/avatar.png';
import Logo from '../images/logo.png';
import Facebook from '../images/facebook-logo';
import Linkedin from '../images/linkedin-logo';
import Github from '../images/github-logo';
import Email from '../images/email-icon';

const Header = () => (
	<header className="site-navigation">
		<div className="identity">
		<img className="logo" src={Logo} alt="Avatar"/>
			<h1>TARO KONNO</h1>
			<h5>FRONT END DEVELOPER</h5>
		</div>
		<div className="social-icons">
			<a href="https://www.linkedin.com/in/tarokonno" target="_blank" rel="noopener noreferrer"><Linkedin className="social-icon" /></a>
			<a href="https://github.com/tarokonno" target="_blank" rel="noopener noreferrer"><Github className="social-icon" /></a>
			<a href="mailto:tarokonno7@gmail.com" target="_blank" rel="noopener noreferrer"><Email className="social-icon" /></a>
			<a href="https://www.facebook.com/taro.konno" target="_blank" rel="noopener noreferrer"><Facebook className="social-icon" /></a>
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