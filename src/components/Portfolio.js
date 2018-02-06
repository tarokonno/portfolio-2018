import React from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import data from '../data';
import Project from './Project';

const Projects = () => {
	return (
		<div className="projects">
		<header className="page-header">
			<h2 className="page-title">Portfolio - some things I did</h2>
		</header>
		<div className="row">
			{ 
				data.projects.map(project => (
					<div className="col-sm-6" key={project.id}>
					<div className="project-tile">
						<Link to={`/portfolio/${project.id}`}><img className="portfolio-image" alt={project.name} src={project.image} /></Link>
						<h2>{project.name}</h2>
						</div>
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
      transitionEnter={false}
      transitionLeave={true}>
			<div>
				
				{projectId ? (<Project projectId={projectId} />) : (<Projects />)}
				
			</div>
		</ReactCSSTransitionGroup>
	)
};

export default Portfolio;