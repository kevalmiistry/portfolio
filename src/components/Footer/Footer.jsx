import {
    faGithub,
    faInstagram,
    faLinkedin,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.scss';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
        >
            <div className="footer_main">
                <div className="socials">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/kevalmiistry/"
                    >
                        <FontAwesomeIcon icon={faGithub} />{' '}
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/keval-mistry-499534161/"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />{' '}
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/kevalmiistry/"
                    >
                        <FontAwesomeIcon icon={faInstagram} />{' '}
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://twitter.com/kevalmiistry/"
                    >
                        <FontAwesomeIcon icon={faTwitter} />{' '}
                    </a>
                    <a className="mobile_email" href="mailto:kevalpm@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />{' '}
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} Keval Mistry</p>
                {/* <div ></div> */}
                <div className="email">
                    <a href="mailto:kevalpm@gmail.com">kevalpm@gmail.com</a>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
