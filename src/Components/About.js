import React from 'react';
import ButtonX from '../ComponentsPartTwo/ButtonX';


const About = () => {
    return (
        <div className="About d-flex">
            <div className="textAboutDiv d-flex flex-column justify-content-around">
                <h2 className="textAbout">ИЗРАБОТЕНО ОД СТУДЕНТИТЕ НА АКАДЕМИЈАТА</h2>
                <div>
                    <h5 className="colorWhite">web:  codepreneurs.co</h5>
                    <h5 className="colorWhite">E-mail:  contact@brainster.co</h5>
                </div>
            </div>
            <div className="d-flex flex-column align-items-end">
                <ButtonX />
                <img src="img/about.png" />
            </div>
        </div>
    )
}

export default About;