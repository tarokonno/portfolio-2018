import React from 'react';
import { Route } from 'react-router-dom';

import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Main = () => (
	<div className="main">
		<Route exact path='/' component={About} />
		<Route exact path='/portfolio-2018/' component={About} />
		<Route path='/portfolio-2018/about' component={About} />
		<Route path='/portfolio-2018/portfolio/:project?' component={Portfolio} />
		<Route exact path='/portfolio-2018/contact' component={Contact} />
	</div>
)

export default Main;