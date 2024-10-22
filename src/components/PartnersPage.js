import React from "react";
import "./PartnersPage.css";
import img1 from './images/img-1.png';
import img2 from './images/img-2.png';
import img3 from './images/img-3.png';
import img4 from './images/img-4.png';
import img5 from './images/img-5.png';

const PartnersPage = () => {
    return (
        <div className="container">
            <h1 className="heading">
                Digital Partners
            </h1>
            <div className="partners-grid">
                <div className="left-column">
                    <img className="partner-item" src={img1} alt="sponsor image 1"/>
                    <img className="partner-item" src={img2} alt="sponsor image 2"/>
                </div>
                <div className="right-column">
                    <img className="partner-item" src={img3} alt="sponsor image 3"/>
                    <img className="partner-item" src={img4} alt="sponsor image 4"/>
                    <img className="partner-item" src={img5} alt="sponsor image 5"/>
                </div>
            </div>
        </div>
    );
};

export default PartnersPage;