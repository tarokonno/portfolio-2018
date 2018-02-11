import React from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import projectData from '../projectData';

const Project = ({ projectId, match }) => {
	const project = projectData.projects.find(p => p.id === projectId);
	console.log(match);

  return (
  	<ReactCSSTransitionGroup
	      transitionName="fade"
	      transitionAppear={true}
	      transitionAppearTimeout={500}
	      transitionLeaveTimeout={500}
	      transitionEnter={true}
	      transitionLeave={true}>
    <div>
      <h1 className="section-header">{project.name}</h1>
      <Link className="back" to='/portfolio-2018/portfolio'>&larr; Back</Link>
      
      	<div className="row col-md-10">
      		<div className="project ">
			      <div className="project-image">
			      	<a href={project.url} target="_blank">
			      		<img src={project.image} />
			      	</a>
			      </div>
			      <div className="project-description-container">
			      <div className="project-description">
				      	<h4 className="title">Stack</h4>
				      	<ul className="list-unstyled stack">
				      		{project.stack.map((name, index) => {
                    return <li key={ index }>{name}</li>;
                  })}
				      	</ul>
				      </div>
			      	<div className="project-description">
			      		<h4 className="title">Objective?</h4>
			      		<p>{project.description}</p>
			      	</div>
			      	<div className="project-description">
				      	<h4 className="title">What did I learn?</h4>
				      	<p>{project.skills}</p>
				      </div>
				      
				      
				      <center>
				     	<a className="button-primary" href={project.url} target='_blank'>See it in action</a>
				     	</center>
			      </div>
			     </div>
		     </div>
    </div>
    
    </ReactCSSTransitionGroup>
  )
}

export default Project;