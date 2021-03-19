import React, {useEffect, useContext, useRef, useState} from 'react';
import ThemeContext from '../ThemeContext';
import Projects from '../Projects';
import projects from '../projects';
import {TweenMax, Power4, gsap} from 'gsap';
import './style.scss';
import ImgContext from '../ImgContext';
import { useLocation } from 'react-router-dom'



const Home = () => {
   let location = useLocation();
    const { theme } = useContext(ThemeContext)
    const { srcImg, updateSrc } = useContext(ImgContext)
    const projetLogo = useRef(null)
    const imgProject = useRef(null)
    useEffect(() => {
        TweenMax.staggerFrom('.title-hide', 1.5, {y: "140%", ease:Power4.easeOut, delay: 1.5}, 0.15)
    }, [])


    const handleImgHome = (e) => {
        const positionX = (window.innerWidth / 2 - e.x) / 10;
        const positionY = -e.y / 20;
        imgProject.current.style.transform = `translate(${positionX}px, ${positionY}px)`
        
    }


    useEffect(() => {
            window.addEventListener('mousemove', handleImgHome)
        return () => {
            window.removeEventListener('mousemove', handleImgHome)
        }
    }, [])
    
    return(
        
        <div className="home">
                <div className="title-wrapper">
                    <h1 className="title" >
                        <div className="title-content">
                            <span className={`title-hide ${theme} hover`}>Portfolio</span>
                        </div>
                    </h1>
                </div>
                <div className="img-container">
                    <img src={srcImg} ref={projetLogo} onMouseMove={handleImgHome} ref={imgProject} />
                </div>
            <div className={`project-container ${theme}`}>
                <Projects listOfProjects={projects} />    
            </div>
        </div>
    
)
};

export default Home;