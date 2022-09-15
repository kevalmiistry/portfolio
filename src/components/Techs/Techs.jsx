import React from 'react';
import './Techs.scss';

const Techs = () => {
    return (
        <>
            <section id="techs_main">
                <div className="category_section">
                    <p className="category_title">Core</p>
                    <div className="category_items">
                        <span className="item">Functional Programming</span>
                        <span className="item">OOP</span>
                        <span className="item">Data Structure</span>
                        <span className="item">Database</span>
                    </div>
                </div>

                <div className="category_section">
                    <p className="category_title">Languages</p>
                    <div className="category_items">
                        <span className="item">Javascript</span>
                        <span className="item">HTML</span>
                        <span className="item">CSS</span>
                        <span className="item">Python</span>
                        <span className="item">C</span>
                        <span className="item">C++</span>
                        <span className="item">Java</span>
                    </div>
                </div>

                <div className="category_section">
                    <p className="category_title">Frameworks &amp; Libraries</p>
                    <div className="category_items">
                        <span className="item">React.js</span>
                        <span className="item">Express.js</span>
                        <span className="item">Node.js</span>
                        <span className="item">Django</span>
                    </div>
                </div>

                <div className="category_section">
                    <p className="category_title">Database</p>
                    <div className="category_items">
                        <span className="item">MongoDB</span>
                        <span className="item">MySQL</span>
                    </div>
                </div>

                <div className="category_section">
                    <p className="category_title">Tools</p>
                    <div className="category_items">
                        <span className="item">Visual Studio Code</span>
                        <span className="item">Git</span>
                        <span className="item">Github</span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Techs;
