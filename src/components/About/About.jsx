import { faHandPeace } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './About.scss';

const About = () => {
    return (
        <>
            <section className="about_main">
                <div className="about_content_wrap">
                    <div className="head_line_text">
                        Hello, I'm Keval Mistry &nbsp;
                        <FontAwesomeIcon icon={faHandPeace} />
                    </div>
                    <p className="secondary_text">
                        And I am just guy who's into Programming, more specifically full stack web development programming. I am currenty pursuing my Bachelor's Degree in Computer Engineering. And aside from college i love to learn about web development technologies and make projects out of it.
                    </p>
                    <button className='resume_btn'>Résumé</button>
                </div>
            </section>
        </>
    );
};

export default About;
