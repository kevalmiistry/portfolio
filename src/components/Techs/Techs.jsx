import React from 'react';
import S from './Techs.module.scss';

const Techs = () => {
    return (
        <>
            <section className={S.techs_main}>
                <div className={S.category_section}>
                    <p className={S.category_title}>Core</p>
                    <div className={S.category_items}>
                        <span className={S.item}>Functional Programming</span>
                        <span className={S.item}>OOP</span>
                        <span className={S.item}>Data Structure</span>
                        <span className={S.item}>Database</span>
                    </div>
                </div>

                <div className={S.category_section}>
                    <p className={S.category_title}>Languages</p>
                    <div className={S.category_items}>
                        <span className={S.item}>Javascript</span>
                        <span className={S.item}>HTML</span>
                        <span className={S.item}>CSS</span>
                        <span className={S.item}>PHP</span>
                        <span className={S.item}>Python</span>
                        <span className={S.item}>C</span>
                        <span className={S.item}>C++</span>
                        <span className={S.item}>Java</span>
                    </div>
                </div>

                <div className={S.category_section}>
                    <p className={S.category_title}>
                        Frameworks &amp; Libraries
                    </p>
                    <div className={S.category_items}>
                        <span className={S.item}>React.js</span>
                        <span className={S.item}>Express.js</span>
                        <span className={S.item}>Node.js</span>
                        <span className={S.item}>Django</span>
                    </div>
                </div>

                <div className={S.category_section}>
                    <p className={S.category_title}>Database</p>
                    <div className={S.category_items}>
                        <span className={S.item}>MongoDB</span>
                        <span className={S.item}>MySQL</span>
                    </div>
                </div>

                <div className={S.category_section}>
                    <p className={S.category_title}>Tools</p>
                    <div className={S.category_items}>
                        <span className={S.item}>Visual Studio Code</span>
                        <span className={S.item}>Git</span>
                        <span className={S.item}>Github</span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Techs;
