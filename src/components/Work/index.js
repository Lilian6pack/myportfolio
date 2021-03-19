import React, {useContext, useEffect, useRef} from 'react';
import { useParams } from 'react-router';
import projects from '../projects';
import './style.scss';
import ThemeContext from '../ThemeContext';



const Work = () => {
    const refContainer = useRef(null)
    const findWorkBySlug = (slug) => {
        return projects.find(p => p.slug === `projets/${slug}`)
    }

    console.log(refContainer.current)
    const { theme } = useContext(ThemeContext)
    const { slug } = useParams(),
    project = findWorkBySlug(slug)
    return (
        <div className={`work ${theme}`} data-scroll-container ref={refContainer} >
            <h1 className="work-title" >{project.title}</h1>
            <p className="work-desc">{project.desc1}</p>
            <div className="work-img-container">
                <img className="work-screen" src={project.screen1} alt=""/>
            </div>
            <p className="work-desc">{project.desc2}</p>
            <div className="bg-screen" style={{backgroundImage: `url(${project.screen2})`}} ></div>
            <p className="work-desc">{project.desc3}</p>
            <div className="work-img-container">
                <img className="work-screen" src={project.screen3} alt=""/>
            </div>
            <div className="work-img-container">
                <img className="work-screen" src={project.screen4} alt=""/>
            </div>
            <a target="_blank" className={`work-link hover ${theme}`} href={project.link}>{`Voir ${project.title}`}</a>
        </div>
    )
};

export default Work;