import {
    faArrowRightLong,
    faHandPointer
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useLocation } from 'react-router-dom';
import S from './Navbar.module.scss';
import { motion } from 'framer-motion';

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
            <nav className={S.navbar_main}>
                <div className={S.navbar_logo}>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={S.logo}
                    >
                        KM
                        <FontAwesomeIcon
                            className={S.arrow_icon}
                            icon={faArrowRightLong}
                        />
                    </motion.p>
                    <div className={S.small_text_wrapper}>
                        {t ? (
                            options[t] && (
                                <>
                                    <motion.div
                                        initial={{ translateX: '-150%' }}
                                        animate={{ translateX: '0%' }}
                                        exit={{ translateX: '100%' }}
                                        transition={{ delay: 0.35 }}
                                        className={S.small_text}
                                    >
                                        {options[t]}
                                    </motion.div>
                                </>
                            )
                        ) : (
                            <>
                                <motion.div
                                    initial={{ translateX: '-150%' }}
                                    animate={{ translateX: '0%' }}
                                    exit={{ translateX: '100%' }}
                                    transition={{ duration: 0.5, delay: 0.35 }}
                                    className={S.small_text}
                                >
                                    {'About'}
                                </motion.div>
                            </>
                        )}
                    </div>
                </div>
                <div className={S.menu_section}>
                    <ul>
                        <motion.li
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className={S.menu_initial}>M</span>
                            <NavLink
                                to="/about"
                                className={`${S.menu_main_txt} ${
                                    Location.pathname === '/' ? 'active' : ''
                                }`}
                                activeclassname="active"
                            >
                                About
                            </NavLink>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <span className={S.menu_initial}>E</span>
                            <NavLink
                                to="/technologies"
                                className={S.menu_main_txt}
                                activeclassname="active"
                            >
                                Techs
                            </NavLink>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <span className={S.menu_initial}>N</span>
                            <NavLink
                                to="/projects"
                                className={S.menu_main_txt}
                                activeclassname="active"
                            >
                                Project
                            </NavLink>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <span className={S.menu_initial}>U</span>
                            <NavLink
                                to="/education"
                                className={S.menu_main_txt}
                                activeclassname="active"
                            >
                                Education
                            </NavLink>
                        </motion.li>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 1.1 }}
                        >
                            <FontAwesomeIcon
                                icon={faHandPointer}
                                className={S.mobile_nav_point}
                            />
                        </motion.div>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
