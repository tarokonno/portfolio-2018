import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './About';
import Portfolio from './Portfolio';

const Main = () => (
	<div className="main">
		<Route exact path='/' component={About} />
		<Route exact path='/portfolio-2018/' component={About} />
		<Route path='/portfolio-2018/about' component={About} />
		<Route path='/portfolio-2018/portfolio/:project?' component={Portfolio} />
	</div>
)

export default Main;