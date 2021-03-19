import React, {useRef, useEffect, useContext} from 'react';
import ThemeContext from '../ThemeContext';
import {TweenMax, Power4, gsap, TimelineMax} from 'gsap';
import { Link } from 'react-router-dom';
import ImgContext from '../ImgContext';

const Project = ({title, number, img1, slug, imgSrc}) => {
      const { theme } = useContext(ThemeContext)
      const { srcImg, updateSrc } = useContext(ImgContext)
      const cardRef = useRef([])
    useEffect(() => {
      gsap.set('.cards__wrapper', { autoAlpha: 1 })
      gsap.timeline({
        delay: 1,
        defaults: {
          duration: 1.25,
          stagger: 0.125,
          ease: "expo.inOut"
        }
      })
      .fromTo('.card-image-wrapper', {yPercent: 110}, {yPercent: 0}, 0)
      .fromTo('.card-image-outer', {yPercent: -110}, {yPercent: 0}, 0)
      .fromTo('.card-text-inner', {opacity: 0, y: 30},{opacity: 1, y: 0}, 0.3)
      .set('.card-wrapper, .card', { pointerEvents: "all"}, "-=1")
    }, [])

    const handleHover = () => {
      updateSrc(`${imgSrc}`)
    }

    const handleHoverLeave = () => {
      updateSrc('')
    }
    
    const deleteSrc = () => {
      updateSrc('')
      console.log(srcImg)
  }

    return(
      
        <figure className={`card card${number}`} ref={cardRef} onMouseEnter={handleHover} onClick={deleteSrc} onMouseLeave={handleHoverLeave} >
          <div className="card-image-wrapper ">
            <div className="card-image-outer">
              <Link to={slug}>
                <img src={img1} className="card-image" alt="image du projet"/>
              </Link>
            </div>
          </div>
          <div className="card-text">
            <h2 className={`card-text-inner ${theme}`}>{title}</h2>
          </div>
        </figure>
      
    )
};

export default Project;