import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Projects.scss';

const Projects = () => {
    return (
        <>
            <section id="projects_main">
                <div className="project_container">
                    <h1 className="project_title">Waste-Aid</h1>
                    <p className="project_description">
                        Waste-Aid is a platform in which Waste recyclers can ask for any day to day waste that general public produce. People can send their waste through mail or courier system. After recycler receives waste he can scan QR code sent by sender along with package and by this the sender get acknowledgement of waste being received by recycler.
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
                        based system with digital system that education institutes use for attendance,
                        results, report card... and also provide instant
                        acknowledgement to their parents.
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
                </div>
            </section>
        </>
    );
};

export default Projects;
