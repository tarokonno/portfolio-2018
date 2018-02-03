import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const About = () => (
			<ReactCSSTransitionGroup
		      transitionName="example"
		      transitionAppear={true}
		      transitionAppearTimeout={500}
		      transitionEnter={false}
		      transitionLeave={true}>
			<div>
				<header className="page-header">
					<h2 className="page-title">Taro - just a bit about me</h2>
				</header>

					<div className="section" id="intro">
						<h3>Background</h3>
						<p>Me fail english? That unpossible! You're gonna have to speak up I'm wearing a towel. You don't win friends with salad! They call 'em fingers but I've never seen them fing. Oh there they go. Do you ever wonder why fat people have fat children? Or why chinese people have chinese children? I call it Billy and the Cloneasauras! I used to be with it but then they changed what it was. It'll happen to you! The ring came off my pudding cap! They're the suckiest bunch of sucks that ever sucked! There's something about flying a kite at night that's just so unwholesome. Homer are you wearing a tie to impress Laddie?</p>
					</div>
					<div className="section" id="experience">
						<h3>Experience</h3>
						<p>Me fail english? That unpossible! You're gonna have to speak up I'm wearing a towel. You don't win friends with salad! They call 'em fingers but I've never seen them fing. Oh there they go. Do you ever wonder why fat people have fat children? Or why chinese people have chinese children? I call it Billy and the Cloneasauras! I used to be with it but then they changed what it was. It'll happen to you! The ring came off my pudding cap! They're the suckiest bunch of sucks that ever sucked! There's something about flying a kite at night that's just so unwholesome. Homer are you wearing a tie to impress Laddie?</p>
					</div>
					<div className="section" id="skills">
						<h3>Skills</h3>
						<p>Me fail english? That unpossible! You're gonna have to speak up I'm wearing a towel. You don't win friends with salad! They call 'em fingers but I've never seen them fing. Oh there they go. Do you ever wonder why fat people have fat children? Or why chinese people have chinese children? I call it Billy and the Cloneasauras! I used to be with it but then they changed what it was. It'll happen to you! The ring came off my pudding cap! They're the suckiest bunch of sucks that ever sucked! There's something about flying a kite at night that's just so unwholesome. Homer are you wearing a tie to impress Laddie?</p>
					</div>
					<div className="section" id="facts">
						<h3>Random facts</h3>
						<p>Me fail english? That unpossible! You're gonna have to speak up I'm wearing a towel. You don't win friends with salad! They call 'em fingers but I've never seen them fing. Oh there they go. Do you ever wonder why fat people have fat children? Or why chinese people have chinese children? I call it Billy and the Cloneasauras! I used to be with it but then they changed what it was. It'll happen to you! The ring came off my pudding cap! They're the suckiest bunch of sucks that ever sucked! There's something about flying a kite at night that's just so unwholesome. Homer are you wearing a tie to impress Laddie?</p>
					</div>

			</div>
			</ReactCSSTransitionGroup>
)

export default About;