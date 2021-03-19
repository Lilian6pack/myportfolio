import React, {useEffect, useState, useRef, useContext} from 'react';
import ThemeContext from '../ThemeContext';
import SwitchButton from '../SwitchButton';
import {TweenMax, Expo, gsap} from 'gsap';

import './style.scss';
import {NavLink, Link} from 'react-router-dom';
import classNames from 'classnames';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [overlayOpen, setOverlayOpen] = useState(null)

    const { theme } = useContext(ThemeContext);
    const t1 = useRef(null);

    useEffect(() => {
        TweenMax.from('.navbar', 0.7, {y: '-150px', opacity: 0, delay: 1}, "-=0.5")
    }, [])

    const handleClick = () => {
        setIsOpen(!isOpen);
        setOverlayOpen(!overlayOpen)
        document.body.style.overflow = 'hidden'; 
    }
        
  
    let themeValue
    let imgValue
    const imgSrc = () => {
        if (theme === 'light'){
            imgValue = "https://res.cloudinary.com/ded9yhg1e/image/upload/v1615821917/logo-black_qxxoyg.png"
        } else {
            imgValue = "https://res.cloudinary.com/ded9yhg1e/image/upload/v1615821919/logo-white_ndsunz.png"
        }
        return imgValue
    }
    const inverseTheme = (theme) => {
        
        if(theme === 'light'){
            themeValue = 'dark'
            
            
        } else {
            themeValue = "light"
            imgValue = "https://res.cloudinary.com/ded9yhg1e/image/upload/v1615821919/logo-white_ndsunz.png"
            
        }
        return themeValue
        
        
    }

    useEffect(() => {
        overlayOpen ? document.body.style.overflow = 'hidden' :  document.body.style.overflow = 'auto'
    }, [overlayOpen])
  
    useEffect(() => {
        t1.current = gsap.timeline({paused: true})
        .to('.overlay',{ top: 0, ease: Expo.easeInOut, duration: 1})
        .staggerFrom('.link-container', 0.5, { y: 135, ease: Expo.easeInOut }, 0.1);
        
        return () => t1.current.kill();
    },[])
 
    useEffect(() => {
        overlayOpen ? t1.current.play() : t1.current.reverse()
    }, [overlayOpen, t1])

    return(
    <>
        <div className="overlay">
            <div className="menu-container">
                <div className="menu-item">
                    <NavLink  exact={true} className="menu-link" to='/'><div className="link-container hover" onClick={handleClick}>Accueil</div></NavLink>
                </div>
                <div className="menu-item">
                    <NavLink  exact={true} className="menu-link" to='/apropos'><div className="link-container hover" onClick={handleClick}>A propos</div></NavLink>
                </div>
                <div className="menu-item">
                    <a className="menu-link" href="mailto:lilianbesse31@gmail.com"><div className="link-container hover" onClick={handleClick}>Contact</div></a>
                </div>
            </div>
        </div>        
        <div className="navbar">
            <Link to="/">
                <img className='navbar-logo hover' src={imgSrc()} alt=""/>
            </Link>
            <SwitchButton  />
            <div className={classNames('menu hover', {'menu-open': isOpen})} onClick={handleClick}>
                <div className={classNames('menu-btn', inverseTheme(theme) )} ></div>
            </div>
        </div>
    </>
)};

export default Navbar;
