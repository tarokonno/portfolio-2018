import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Project = ({ projectId }) => {
	const project = data.projects.find(p => p.id === projectId);
  return (
  	<ReactCSSTransitionGroup
	      transitionName="example"
	      transitionAppear={true}
	      transitionAppearTimeout={500}
	      transitionLeaveTimeout={500}
	      transitionEnter={false}
	      transitionLeave={true}>
    <div>
    	<Link className="back" to='/portfolio'>&larr; Back</Link>
      <h1>{project.name}</h1>
      <div className="project">
      <div className="row">
	      <div className="col-lg-7">
	      	<img src={project.image} />
	      </div>
	      <div className="project-description col-lg-5">
	      	<p>{project.description}</p>
	      </div>
	     </div>
    </div>
    </div>
    </ReactCSSTransitionGroup>
  )
}

export default Project;