import React from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import data from '../data';

const Project = ({ projectId, match }) => {
	const project = data.projects.find(p => p.id === projectId);
	console.log(match);

  return (
  	<ReactCSSTransitionGroup
	      transitionName="fade"
	      transitionAppear={true}
	      transitionAppearTimeout={500}
	      transitionLeaveTimeout={500}
	      transitionEnter={false}
	      transitionLeave={true}>
    <div>
      <h1>{project.name}</h1>
      <Link className="back" to='/portfolio'>&larr; Back</Link>
      <div className="project">
      
      	<div className="project-description">
	      	<p>{project.description}</p>
	      </div>
	      <div className="project-image">
	      	<img src={project.image} />
	      </div>
	     </div>
    </div>
    
    </ReactCSSTransitionGroup>
  )
}

export default Project;