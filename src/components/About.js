import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Avatar from '../images/avatar.png';
import Html5 from '../images/html5.png';
import Css3 from '../images/css3.png';
import Sass from '../images/sass.png';
import Js from '../images/js.png';
import ReactLogo from '../images/react.png';
import StyledComponents from '../images/styled-components.png';
import Node from '../images/node.png';
import Bootstrap from '../images/bootstrap.png';
import Github from '../images/github.png';
import Jira from '../images/jira.png';
import Wordpress from '../images/wordpress.png';
import Sketch from '../images/sketch.png';
import Invisionapp from '../images/invisionapp.png';
import Illustrator from '../images/ai.png';
import Photoshop from '../images/photoshop.png';
import Mailchimp from '../images/mailchimp.png';
import Marketo from '../images/marketo.png';
import ET from '../images/exacttarget.png';
import Excel from '../images/excel.png';
import Word from '../images/word.png';
import Powerpoint from '../images/powerpoint.png';

const About = () => (
			<ReactCSSTransitionGroup
		      transitionName="fade"
		      transitionAppear={true}
		      transitionAppearTimeout={500}
		      transitionEnter={false}
		      transitionLeave={true}>
			<div>
					<div className="section" id="intro">
						<h3 className="section-header">Profile 🇬🇧 🇯🇵</h3>
						<div className="row">
							<div className="avatar-container col-md-3">
								<img className="avatar" src={Avatar} />
							</div>
							<div className="col-md-9">
								<p>Born and bred in Sydney and moving to London in March, I’m a Bachelor of Business (Marketing) graduate who is self taught in Frontend Web Development. I have experience in developing and delivering email marketing campaigns, webpages using HTML and CSS (Sass) and recently worked with components in React. I have a keen eye for design and layout and ensure that the UX and flow of projects make sense and are consistent within brand guidelines and project strategy.
								</p>
								<p>I am looking forward to furthering my skills in web development, particularly Javascript, and working within teams 👯‍♂️ to deliver digital projects. 🙏</p>
								<p>On another note, I love playing and watching football ⚽, travelling to see new exciting places and meet new interesting people and you'll definitely catch me binge watching TV series and movies wherever I am!</p>
							</div>
						</div>
					</div>

					<div className="section" id="experience">
						<h3 className="section-header">Experience</h3>
						<div className="row">
							<div className="role-section col-md-12">
								<div className="date-container">
									<h5 className="role-description">JUNIOR FRONTEND DEVELOPER - Oneflare</h5>
									<p className="role-date">Aug 2017 - Feb 2018</p>
								</div>
								<div className="row col-md-8">
								<ul className="work-experience">
									<li>Developing web pages and components within React</li>
									<li>Performing Frontend website tasks and managing email activity while working with Product managers, Backend and Frontend Developers, UX and Designers</li>
									<li>Working within a squad in sprints using JIRA and Github to manage and deploy tasks</li>
								</ul>
								</div>
							</div>
							<div className="role-section col-md-12">
								<h5 className="role-description">DIGITAL MARKETING PRODUCER - Oneflare</h5>
								<p className="role-date">Aug 2015 - Jul 2017</p>
								<div className="row col-md-8">
								<ul className="work-experience">
									<li>Developing and delivering automated and tactical blast campaigns to enhance customer engagement and education</li>
									<li>Designing assets and developing landing pages to support sales and marketing campaigns</li>
								</ul>
								</div>
							</div>
							<div className="role-section col-md-12">
								<h5 className="role-description">ENGAGEMENT EXECUTIVE - Global Red</h5>
								<p className="role-date">Oct 2014 - Aug 2015</p>
								<div className="row col-md-8">
								<ul className="work-experience">
									<li>Developing and delivering email campaigns from client briefs</li>
									<li>Working with developers, account managers and project managers to deliver BAU tasks and migration projects</li>
								</ul>
								</div>
							</div>
							<div className="role-section col-md-12">
								<h5 className="role-description">WEB DESIGNER - Freelance</h5>
								<p className="role-date">Jul 2013 - Sept 2014</p>
								<div className="row col-md-8">
								<ul className="work-experience">
									<li>Design and developing Wordpress websites for small business</li>
									<li>Designing banners, logos and a platform reskin</li>
									<li>Developing landing pages and eDMs</li>
								</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="section" id="skills">
						<h3 className="section-header">Skills</h3>
						<div className="row">
							<div className="skill-image col-md-2 col-4">
								<img title="Html5" src={Html5} />
							</div>
							<div className="skill-image col-md-2 col-4">
								<img title="Css3" src={Css3} />
							</div>
							<div className="skill-image col-md-2 col-4">
								<img title="Javascript ES6" src={Js} />
							</div>
							<div className="skill-image col-md-2 col-4">
								<img title="React" src={ReactLogo} />
							</div>
							<div className="skill-image col-md-2 col-4">
								<img title="Sass" src={Sass} />
							</div>
							<div className="skill-image col-md-2 col-4">
								<img title="Styled Components" src={StyledComponents} />
							</div>
							<div className="skill-image col-md-2 col-4">
								<img title="Node" src={Node} />
							</div>
							<div className="skill-image col-md-2 col-4">
								<img title="Bootstrap" src={Bootstrap} />
							</div>
							<div className="skill-image col-md-2 col-4">
								<img title="Jira" src={Jira} />
							</div>
							<div className="skill-image col-md-2 col-4">
								<img title="Wordpress" src={Wordpress} />
							</div>
							<div className="skill-image col-md-2 col-4">
								<img title="Sketch" src={Sketch} />
							</div>
							<div className="skill-image col-md-2 col-4">
								<img title="Invisionapp" src={Invisionapp} />
							</div>
							<div className="skill-image col-md-2 col-4">
								<img title="Illustrator" src={Illustrator} />
							</div>
							<div className="skill-image col-md-2 col-4">
								<img title="Photoshop" src={Photoshop} />
							</div>
							<div className="skill-image col-md-2 col-4">
								<img title="MailChimp" src={Mailchimp} />
							</div>
							<div className="skill-image col-md-2 col-4">
								<img title="Exact Target" src={ET} />
							</div>
							<div className="skill-image col-md-2 col-4">
								<img title="Marketo" src={Marketo} />
							</div>
							<div className="skill-image col-md-2 col-4">
								<img title="Word" src={Word} />
							</div>
							<div className="skill-image col-md-2 col-4">
								<img title="Excel" src={Excel} />
							</div>
							<div className="skill-image col-md-2 col-4">
								<img title="Powerpoint" src={Powerpoint} />
							</div>
						</div>
					</div>
					<div className="section" id="facts">
						<h3>Personal Achievements</h3>
						<ul>
							<li>Manchester United and England Tour Squad (Parramatta Eagles Soccer Academy) 2003</li>
							<li>Adidas 'Earn Your Stripes' Skill Competition Winner 2004</li>
							<li>NSW Premier League Champions (Parramatta Eagles) 2004</li>
							<li>Bachelor of Business (University of Technology Sydney) 2011</li>
							<li>Champions of Champions Tournament Winners and MVP Award 2013</li>
							<li>CEO Award April 2016 – Oneflare</li>
						</ul>
					</div>

			</div>
			</ReactCSSTransitionGroup>
)

export default About;