import S from './Techs.module.scss';
import { motion } from 'framer-motion';

const Techs = () => {
    const Core = [
        'Functional Programming',
        'OOP',
        'Data Structure',
        'Database'
    ];
    const Languages = [
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS',
        'PHP',
        'Python',
        'C',
        'C++',
        'Java'
    ];
    const FrameAndLibs = ['React.js', 'Express.js', 'Node.js', 'Django'];
    const Database = ['MongoDB', 'MySQL'];
    const Tools = ['Visual Studio Code', 'Git', 'GitHub'];
    const CloudTechs = ['Firebase Cloud Storage'];
    const Secs = [
        {
            title: 'Core',
            items: Core
        },
        {
            title: 'Languages',
            items: Languages
        },
        {
            title: 'Frameworks & Libraries',
            items: FrameAndLibs
        },
        {
            title: 'Database',
            items: Database
        },
        {
            title: 'Tools',
            items: Tools
        },
        {
            title: 'Cloud Techs',
            items: CloudTechs
        }
    ];

    return (
        <>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className={S.techs_main}
            >
                {Secs?.map((sec, idx) => {
                    return (
                        <div key={idx} className={S.category_section}>
                            <p className={S.category_title}>{sec.title}</p>
                            <div className={S.category_items}>
                                {sec.items.map((item, idx) => (
                                    <span key={idx} className={S.item}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </motion.section>
        </>
    );
};

export default Techs;
