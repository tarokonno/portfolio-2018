import React from 'react';
import { Link } from 'react-router-dom';
import Project from './Project';
import data from '../data';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Projects = () => {
	return (
		

			<div class="row">
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
		
	);
};

const Portfolio = ({ match }) => {
	const projectId = match.params.project;

	return (
		<ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={true}>
			<div>
				<header className="page-header">
					<h2 className="page-title">Portfolio - some things I did</h2>
				</header>
				
				{projectId ? (<Project projectId={projectId} />) : (<Projects />)}
				
			</div>
		</ReactCSSTransitionGroup>
	)
};

export default Portfolio;