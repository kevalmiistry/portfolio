import { faHandPeace } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import S from './About.module.scss';
import res from '../../assets/resume/Keval_Mistry_CV.pdf';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className={S.about_main}
            >
                <div className={S.about_content_wrap}>
                    <div className={S.head_line_text}>
                        Hello, I'm Keval Mistry &nbsp;
                        <FontAwesomeIcon icon={faHandPeace} />
                    </div>
                    <p className={S.secondary_text}>
                        And I am just guy who's into Programming, more
                        specifically full stack web development programming. I
                        am currenty pursuing my Bachelor's Degree in Computer
                        Engineering. And aside from college i love to learn
                        about web development technologies and make projects out
                        of it.
                    </p>
                    <a href={res} className={S.resume_btn}>
                        Résumé
                    </a>
                </div>
            </motion.section>
        </>
    );
};

export default About;
