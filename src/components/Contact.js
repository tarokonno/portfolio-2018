import React from 'react';
import Facebook from '../images/facebook-logo';
import Linkedin from '../images/linkedin';
import Github from '../images/github-logo';
import Email from '../images/email-icon';

const Contact = () => (
	<div>
	<h2 className="page-title">Let's catch up!</h2>
	<div className="section contact-page">
		<h4>Please feel free to get in contact, connect or lurk around through my social media.</h4>
		<div className="contact-social"><Github />+61 414 077 814</div>
		<div className="contact-social"><Email /> tarokonno7@gmail.com</div>
		<div className="contact-social"><Linkedin />linked.com/in/tarokonno</div>
		<div className="contact-social"><Github />github.com/tarokonno</div>
		<div className="contact-social"><Facebook />facebook.com/taro.konno</div>
	</div>
	</div>
)

export default Contact;