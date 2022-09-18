import {
    faArrowRightLong,
    faHandPointer
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    let Location = useLocation();
    const options = {
        technologies: 'Technologies',
        about: 'About',
        education: 'Education',
        projects: 'Projects'

    };
    let t = undefined;
    t = Location.pathname.slice(1);

    return (
        <>
            <nav id="navbar_main">
                <div className="navbar_logo">
                    KM{' '}
                    <span className="small_text">
                        <FontAwesomeIcon icon={faArrowRightLong} />{' '}
                        {t ? options[t]:'About'}
                    </span>
                </div>
                <div className="menu_section">
                    <ul>
                        <li>
                            <span className="menu_initial">M</span>
                            <NavLink
                                to="/about"
                                className={`menu_main_txt ${Location.pathname==='/'?'active':''}`}
                                activeclassname="active"
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <span className="menu_initial">E</span>
                            <NavLink
                                to="/technologies"
                                className="menu_main_txt"
                                activeclassname="active"
                            >
                                Techs
                            </NavLink>
                        </li>
                        <li>
                            <span className="menu_initial">N</span>
                            <NavLink
                                to="/projects"
                                className="menu_main_txt"
                                activeclassname="active"
                            >
                                Project
                            </NavLink>
                        </li>
                        <li>
                            <span className="menu_initial">U</span>
                            <NavLink
                                to="/education"
                                className="menu_main_txt"
                                activeclassname="active"
                            >
                                Education
                            </NavLink>
                        </li>
                        <FontAwesomeIcon
                            icon={faHandPointer}
                            className="mobile_nav_point"
                        />
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
