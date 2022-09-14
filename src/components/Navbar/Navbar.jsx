import { faArrowRightLong, faHandPointer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink, useLocation,  } from 'react-router-dom';
import './Navbar.scss';


const Navbar = () => {
    let Location = useLocation()
    const options = {
        Technologies:'Technologies',
        about:'About'
    }
    let t = undefined
    t = Location.pathname.slice(1)
    
    return (
        <>
            <nav id="navbar_main">
                <div className="navbar_logo">KM <span className="small_text"><FontAwesomeIcon icon={faArrowRightLong} /> {t && options[t]}</span></div>
                <div className="menu_section">
                    <ul>
                        <li>
                            <span className="menu_initial">M</span>
                            <NavLink to="/about" className='menu_main_txt' activeclassname="active" >About</NavLink>
                        </li>
                        <li>
                            <span className="menu_initial">E</span>
                            <NavLink to="/Technologies" className='menu_main_txt' activeclassname="active" >Techs</NavLink>
                        </li>
                        <li>
                            <span className="menu_initial">N</span>
                            <NavLink to="/Projects" className='menu_main_txt' activeclassname="active" >Project</NavLink>
                        </li>
                        <li>
                            <span className="menu_initial">U</span>
                            <NavLink to="/Education" className='menu_main_txt' activeclassname="active" >Education</NavLink>
                        </li>
                        <FontAwesomeIcon icon={faHandPointer} className='mobile_nav_point' />
                        
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
