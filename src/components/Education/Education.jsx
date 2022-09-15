import React from 'react';
import './Education.scss';

const Education = () => {
    return (
        <>
            <section id="education_main">
                <div id="d1" className="upper-div">
                    <div className="card" id="card-1">
                        <div className="inner-card-div">
                            <p className="course_name">B.E. in Computer Engineering</p>
                            <p className="institute_name">Government Engineering College, Modasa</p>
                            <p className="time_period">Nov-2020 to Present</p>
                        </div>
                    </div>
                </div>
                <div id="d2" className="upper-div">
                    <div className="card" id="card-2">
                        <div className="inner-card-div">
                            <p className="course_name">Diploma in Computer Engineering</p>
                            <p className="institute_name">Jayvantrai Harrai Desai Polytechnic, Palsana
</p>
                            <p className="time_period">Aug-2017 to Aug-2020</p>
                        </div>
                    </div>
                </div>
                <div id="d3" className="upper-div">
                    <div className="card" id="card-3">
                        <div className="inner-card-div">
                            <p className="course_name">10th SSC - GSHSEB</p>
                            <p className="institute_name">Shree Ram kabir Secondary and Higher Secondary School, Surat</p>
                            <p className="time_period">March-2017</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Education;
