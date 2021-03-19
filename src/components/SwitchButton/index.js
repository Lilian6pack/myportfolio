import React, {useContext} from 'react';
import './style.scss';
import ThemeContext from '../ThemeContext';

const SwitchButton = () => {

    const { theme, updateTheme } = useContext(ThemeContext);

    const handleClick = () => {
        if(theme === 'light'){
            updateTheme('dark')
        } else {
            updateTheme('light')
        }
    }
    return(
    <div className="switch hover">
        <label>
            <input type="checkbox" className="switch-checkbox" onClick={handleClick} />
            <span className="switch-check"></span>
        </label>
    </div>
)};

export default SwitchButton;