import React, {useContext} from 'react';
import './style.scss';
import ThemeContext from '../ThemeContext';

const About = () => {
    const { theme } = useContext(ThemeContext);
     return(
        <div className={`about ${theme}`}>
            <h1>WEB DEV IS SO COOL</h1>
            <div className="about-content">
                <p>Hello, moi c'est Lilian je suis développeur web Fullstack, mais j'ai une préférence pour le Front-end !</p>
                <p>J'ai débuté le développement web début 2020 au Wagon de Bordeaux, un bootcamp de 9 semaines pour devenir développeur web fullstack.</p>
                <p>Après ça, j'ai continué de me former de mon coté en Javascript. Puis en janvier 2021, je me suis spécialisé en React / Redux grâce a une formation de 2 mois suivie chez O'clock (école de développement web / mobile ).</p>
            </div>
            <div className="skills">
                <div className="about-languages">
                    <h2>Languages</h2>
                    <p>Html, CSS/Scss, Javascript, Ruby</p>
                </div>
                <div className="about-framework">
                    <h2>Librairies / Framesworks / Autres</h2>
                    <p>Ruby on Rails, React, Redux, GSAP, Git, Héroku, PostgreSQL</p>
                </div>
                <div className="about-ui">
                    <h2>UI / UX</h2>
                    <p>Figma, Adobe XD, Wireframe</p>
                </div>
            </div>
            <div className="anim">
                <div className="scroll text">
                    <div className={theme}>
                        - Dev is cool 🔥-  Web dev Frontend ❤️-   React Redux ✏️-  Web dev Frontend ❤️  
                    </div>
                    <div className={theme}>
                        - Dev is cool 🔥-  Web dev Frontend ❤️-   React Redux ✏️-  Web dev Frontend ❤️
                    </div>
                </div>
                <div className="scroll2 text">
                    <div  className={theme}>
                        - Dev is cool 🔥-  Web dev Frontend ❤️-   React Redux ✏️-  Web dev Frontend ❤️ 
                    </div>
                    <div  className={theme}>
                        - Dev is cool 🔥-  Web dev Frontend ❤️-   React Redux ✏️-  Web dev Frontend ❤️ 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;