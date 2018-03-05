import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Facebook from '../images/facebook-logo';
import Linkedin from '../images/linkedin-logo';
import Github from '../images/github-logo';
import Email from '../images/email-icon';
import Mobile from '../images/mobile-icon';
import Coconut from '../images/taro-coconut.jpg';

const Contact = () => (
	<ReactCSSTransitionGroup
    transitionName="fade"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionLeaveTimeout={500}
    transitionEnter={true}
    transitionLeave={true}>

		<h2 className="page-title">Always time for coffee (or a coconut)</h2>
		<div className="section contact-page">
			<h4>Please feel free to get in contact, connect or lurk around through my social media.</h4>
			<div className="row">
				<div className="contact-social-icons col-lg-6 col-md-12">
					<div className="contact-social-icon"><Mobile />07 533 080 781</div>
					<div className="contact-social-icon">
						<a href="mailto:tarokonno7@gmail.com" target="_blank" rel="noopener noreferrer"><Email /> tarokonno7@gmail.com</a>
					</div>
					<div className="contact-social-icon">
						<a href="https://www.linkedin.com/in/tarokonno" target="_blank" rel="noopener noreferrer"><Linkedin />linked.com/in/tarokonno</a>
					</div>
					<div className="contact-social-icon">
						<a href="https://github.com/tarokonno" target="_blank" rel="noopener noreferrer"><Github />github.com/tarokonno</a>
					</div>
					<div className="contact-social-icon">
						<a href="https://www.facebook.com/taro.konno" target="_blank" rel="noopener noreferrer"><Facebook />facebook.com/taro.konno</a>
					</div>
				</div>
				<div className="col-lg-6 col-md-12">
					<img src={Coconut} />
				</div>
			</div>
		</div>
	</ReactCSSTransitionGroup>
)

export default Contact;