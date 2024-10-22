import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./about.jpeg";
import './AboutPage.css';

const AboutPage = () => {
    return(
        <div class="container my-5">
            <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
              <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 class="display-4 fw-bold lh-1 text-body-emphasis heading">TECHNOVANZA</h1>
                <p class="lead details">
                    <li>
                    Due to inundating creativity and thirst for innovation of our students and with the constant guidance of our unparalleled faculty, Technovanza was born in 2000.
                    </li>
                    <li>
                    Keeping in mind our core values of working as a team with integrity and professionalism and the ultimate aim of “Taking Technology to the Society”, Technovanza has grown over the last 19 years to become one of the most popular and awaited techno-management events in the country.
                    </li>
                    <li>
                    Reaching out to students, industry and the society in general, Technovanza 2020-21 promises to be bigger than ever!
                    </li>
                </p>
              </div>
              <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                  <img class="rounded-lg-3" src={logo} alt="Logo" width="400"/>
              </div>
            </div>
        </div>
    );
};

export default AboutPage;