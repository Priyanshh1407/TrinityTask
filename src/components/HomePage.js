import React from "react";
import "./HomePage.css";

const HomePage = () => {
    console.log("Home page rendered successfully.");
    return (
        <div class="container">
            <div className="discription">
                <p>
                    Technovanza is the annual technical fest of VITI, where students strive for excellence while giving back to the community. Over the last 18 years, it has grown to become one of the most popular Techno-managerial events in the country and continues to awe its audience with the quality of events it hosts: From conducting competitive events, where people all over India can showcase their talents to hosting exhibitions and dignitaries from various fields, Technovanza keeps getting better each year. Keeping up with our motto of "Taking Technology to the society", we continue to deliver an exuberant event, virtually this year!
                </p>
            </div>
            <div className="card-container">
                <div className="card card-1">
                    <h2 className="sub-heading">Participate in the festival from the comforts of your home</h2>
                    <p className="text">With all the safety concerns raising from COVID-19, we have shifted the event to an online platform. Experience a new form of Technovanza from the safe space of your home!</p>
                </div>
                <div className="card card-2">
                    <h2 className="sub-heading">Important Dates</h2>
                    <p className="text">Technovanza is launching itself online on the following days. Please mark your calendars and brace yourself for the Virtual Vortex that is about to take you by storm!</p>
                    <br />11th, 12th. 13th. 14th March 2021
                </div>
            </div>
        </div>
    );
};

export default HomePage;