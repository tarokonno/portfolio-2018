import React from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import projectData from '../projectData';
import Project from './Project';

const Projects = () => {
	return (
		<div className="projects">
		<header className="page-header">
			<h2 className="page-title">Some things I gone and did.</h2>
		</header>
		<div className="row">
			{ 
				projectData.projects.map(project => (
					<div className="col-sm-6" key={project.id}>
						<Link to={`/portfolio-2018/portfolio/${project.id}`}>
							<div className="project-tile">
								<img className="portfolio-image" alt={project.name} src={project.image} />
								<h2>{project.name}</h2>
							</div>
						</Link>
					</div>
				))
			}
		</div>
		</div>
	);
};

const Portfolio = ({ match }) => {
	const projectId = match.params.project;
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
				
				{projectId ? (<Project projectId={projectId} />) : (<Projects />)}
				
			</div>
		</ReactCSSTransitionGroup>
	)
};

export default Portfolio;