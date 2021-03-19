import React, {useRef, useEffect} from 'react';
import Project from './project';
import './style.scss';
const Projects = ({ listOfProjects }) => {
    return(
        <div className="card-wrapper" data-scroll-section>
            {listOfProjects.map((project) => (
                <Project key={project.number} {...project} />
            ))}
        </div>
    )
};

export default Projects