import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Avatar from '../images/avatar.png';

const About = () => (
			<ReactCSSTransitionGroup
		      transitionName="fade"
		      transitionAppear={true}
		      transitionAppearTimeout={500}
		      transitionEnter={false}
		      transitionLeave={true}>
			<div>
					<div className="section" id="intro">
						<h3 className="section-header">Profile</h3>
						<div className="row">
							<div class="avatar-container col-md-3">
								<img class="avatar" src={Avatar} />
							</div>
							<div class="col-md-9">
								<p>Hey I’m Taro, a Bachelor of Business (Marketing) graduate who is self taught in Frontend Web Development. 
								I have experience in developing webpages using HTML and CSS (Sass) and have recently worked with components in React and am interested in creating scalable and reusable components. 
								I have a keen eye for design and layout and ensure that the UX and flow of projects make sense and are consistent within brand guidelines and project strategy. 
								</p>
								<p>I am looking forward to furthering my skills in web development, particularly Javascript, and working within teams to deliver digital projects.</p>
							</div>
						</div>
					</div>

					<div className="section" id="experience">
						<h3 className="section-header">Experience</h3>
						<div class="row">
							<div class="role-section col-md-12">
								<h5 className="role-description">JUNIOR FRONTEND DEVELOPER - Oneflare</h5>
								<p class="role-date">Aug 2017 - Feb 2018</p>
								<div className="row col-md-8">
								<ul className="work-experience">
									<li>Developing web pages and components within React</li>
									<li>Performing Frontend website tasks and managing email activity while working with Product managers, Backend and Frontend Developers, UX and Designers</li>
									<li>Working within a squad in sprints using JIRA and Github to manage and deploy tasks</li>
								</ul>
								</div>
							</div>
							<div class="role-section col-md-12">
								<h5 className="role-description">DIGITAL MARKETING PRODUCER - Oneflare</h5>
								<p class="role-date">Aug 2015 - Jul 2017</p>
								<div className="row col-md-8">
								<ul className="work-experience">
									<li>Developing and delivering automated and tactical blast campaigns to enhance customer engagement and education</li>
									<li>Designing assets and developing landing pages to support sales and marketing campaigns</li>
								</ul>
								</div>
							</div>
							<div class="role-section col-md-12">
								<h5 className="role-description">ENGAGEMENT EXECUTIVE - Global Red</h5>
								<p class="role-date">Oct 2014 - Aug 2015</p>
								<div className="row col-md-8">
								<ul className="work-experience">
									<li>Developing and delivering email campaigns from client briefs</li>
									<li>Working with developers, account managers and project managers to deliver task BAU tasks and migration projects</li>
								</ul>
								</div>
							</div>
							<div class="role-section col-md-12">
								<h5 className="role-description">WEB DESIGNER - Freelance</h5>
								<p class="role-date">Jul 2013 - Sept 2014</p>
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
						<h3>Skills</h3>
						<div className="row">
							<div className="col-md-6">
								<ul className="list-unstyled">
									<li>HTML5</li>
									<li>CSS3</li>
									<li>Javascript</li>
									<li>React</li>
									<li>Sass</li>
									<li>Styled Components</li>
									<li>Node</li>
									<li>Bootstrap</li>
									<li>Wordpress</li>
									<li>Github</li>
									<li>JIRA</li>
								</ul>
							</div>
							<div className="col-md-6">
								<ul className="list-unstyled">
									<li>Illustrator</li>
									<li>Photoshop</li>
									<li>Sketch</li>
									<li>InvisionApp</li>
									<li>MailChimp</li>
									<li>Marketo</li>
									<li>ExactTarget</li>
									<li>Wordpress</li>
									<li>Excel</li>
									<li>Word</li>
									<li>Powerpoint</li>
								</ul>
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