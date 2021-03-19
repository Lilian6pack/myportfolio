import React, {useState} from 'react';
import Home from '../Home';
import './style.scss';
import { Switch, Route } from 'react-router-dom';
import Work from '../Work';
import Cursor from '../Cursor';
import Navbar from '../Navbar';
import ScrollToTop from '../ScrollToTop';
import About from '../About';
import ThemeContext from '../ThemeContext';
import ImgContext from '../ImgContext';

const Portfolio = () => {

    const [theme, setTheme] = useState("dark");

    const contextValue = {
        theme,
        updateTheme: setTheme,
    }
    const [srcImg, setSrc] = useState("");

    const contextValueImg = {
        srcImg,
        updateSrc: setSrc,
    }
    return(
    <div className={theme}>
        <ScrollToTop />
        <ThemeContext.Provider value={contextValue}>
            <Cursor />
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <ImgContext.Provider value={contextValueImg}>    
                        <Home />
                    </ImgContext.Provider>
                </Route>
                <Route exact path="/projets/:slug">
                    <Work />
                </Route>
                <Route exact path="/apropos">
                    <About />
                </Route>
            </Switch>
        </ThemeContext.Provider>
    </div>
)};

export default Portfolio;