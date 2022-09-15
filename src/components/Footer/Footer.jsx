import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer_main">
                &copy; {new Date().getFullYear()} Keval Mistry
            </div>
        </footer>
    );
};

export default Footer;
