import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import S from './Projects.module.scss';
import { motion } from 'framer-motion';

const Projects = () => {
    const data = [
        {
            title: 'TalkShawk - Chat App',
            desc: 'TalkShawk is Web based chat application for dark theme enthusiasts, in which people can do chat One on One or in a Group',
            tags: [
                'TypeScript',
                'React.js',
                'MongoDB',
                'Expressjs',
                'Nodejs',
                'Firebase'
            ],
            repos: [
                {
                    dataType: 'Frontend',
                    link: 'https://github.com/kevalmiistry/TalkShawk_frontend'
                },
                {
                    dataType: 'Backtend',
                    link: 'https://github.com/kevalmiistry/talkshawk_backend'
                }
            ],
            live: 'https://talkshawk.vercel.app/'
        },
        {
            title: 'Waste-Aid',
            desc: 'Waste-Aid is a platform in which Waste recyclers can ask for any day to day waste that general public produce. People can send their waste through mail or courier system. After recycler receives waste he can scan QR code sent by sender along with package and by this the sender get acknowledgement of waste being received by recycler.',
            tags: ['React.js', 'MongoDB', 'Expressjs', 'Nodejs', 'Cloudinary'],
            repos: [
                {
                    dataType: 'Frontend',
                    link: 'https://github.com/kevalmiistry/Waste-Aid_frontend'
                },
                {
                    dataType: 'Backtend',
                    link: 'https://github.com/kevalmiistry/Waste-Aid_backend'
                }
            ],
            live: 'https://waste-aid.netlify.app/'
        },
        {
            title: 'Faculty Parent Connect',
            desc: 'FPC is web based system with motive to replace paper based system with digital system that education institutes use for attendance, results, report card... and also provide instant acknowledgement to their parents.',
            tags: [
                'PHP',
                'HTML',
                'CSS',
                'Bootstrap',
                'JavaScript',
                'ajax',
                'MySQL'
            ],
            repos: [
                {
                    dataType: '',
                    link: 'https://github.com/kevalmiistry/Faculty_Parent_Connect'
                }
            ],
            live: null
        }
    ];
    return (
        <>
            <section className={S.projects_main}>
                {data.map((proj, idx) => (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.2,
                            delay: (idx + 1) / 10
                        }}
                        key={idx}
                        className={S.project_container}
                    >
                        <h1 className={S.project_title}>{proj.title}</h1>
                        <p className={S.project_description}>{proj.desc}</p>
                        <div className={S.project_tags}>
                            {proj.tags.map((t, idx) => (
                                <span key={idx} className={S.tag}>
                                    {t}
                                </span>
                            ))}
                        </div>
                        <div className={S.github_repo}>
                            {proj.repos.map((r, idx) => (
                                <a
                                    key={idx}
                                    data-type={r.dataType}
                                    target="_blank"
                                    rel="noreferrer"
                                    href={r.link}
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            ))}
                            {proj.live && (
                                <a
                                    target={'_blank'}
                                    rel="noreferrer"
                                    href={proj.live}
                                    className={S.live}
                                >
                                    {' '}
                                    <FontAwesomeIcon
                                        icon={faArrowUpRightFromSquare}
                                    />
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
                {/*  */}
                {/* <div className="project_container">
                    <h1 className="project_title">Waste-Aid</h1>
                    <p className="project_description">
                        Waste-Aid is a platform in which Waste recyclers can ask
                        for any day to day waste that general public produce.
                        People can send their waste through mail or courier
                        system. After recycler receives waste he can scan QR
                        code sent by sender along with package and by this the
                        sender get acknowledgement of waste being received by
                        recycler.
                    </p>
                    <div className="project_tags">
                        <span className="tag">MongoDB</span>
                        <span className="tag">Express.js</span>
                        <span className="tag">React.js</span>
                        <span className="tag">Node.js</span>
                    </div>
                    <div className="github_repo">
                        <a
                            data-type="Frontend"
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/kevalmiistry/Waste-Aid_frontend"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a
                            data-type="Backend"
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/kevalmiistry/Waste-Aid_backend"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>

                <div className="project_container">
                    <h1 className="project_title">Faculty Parent Connect</h1>
                    <p className="project_description">
                        FPC is web based system with motive to replace paper
                        based system with digital system that education
                        institutes use for attendance, results, report card...
                        and also provide instant acknowledgement to their
                        parents.
                    </p>
                    <div className="project_tags">
                        <span className="tag">HTML</span>
                        <span className="tag">CSS</span>
                        <span className="tag">Bootstrap</span>
                        <span className="tag">Javascript</span>
                        <span className="tag">ajax</span>
                        <span className="tag">PHP</span>
                        <span className="tag">MySQL</span>
                    </div>
                    <div className="github_repo">
                        <a
                            data-type=""
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/kevalmiistry/Faculty_Parent_Connect"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div> */}
            </section>
        </>
    );
};

export default Projects;
