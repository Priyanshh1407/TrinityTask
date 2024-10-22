import React from "react";
import './EventsPage.css';

const EventsPage = () => {
  const events = [
    {
      date: "11 MAR 2021",
      title: "PeRuse",
      time: "11AM - 3PM",
    },
    {
      date: "12 MAR 2021",
      title: "Escaperoom",
      time: "6PM - 8PM",
    },
    {
      date: "13 MAR 2021",
      title: "Javaguru",
      time: "10AM - 2PM",
    },
    {
      date: "13 MAR 2021",
      title: "Technohunt",
      time: "10AM - 2PM",
    },
    {
      date: "13 MAR 2021",
      title: "Codestorm",
      time: "10AM - 12.30PM",
    },
    {
      date: "13 MAR 2021",
      title: "Smartcity (School Cup)",
      time: "3PM - 6PM",
    },
    {
      date: "13 MAR 2021",
      title: "Eportfolio",
      time: "3PM - 6PM",
    },
    {
      date: "14 MAR 2021",
      title: "C - Way",
      time: "10AM - 2PM",
    },
  ];

  return (
    <div className="events-schedule">
      <h1>Events Schedule</h1>
      <p>
        Make sure you login into this website before registering to any event.
      </p>
      <div className="schedule-grid">
        {events.map((event, index) => (
          <div key={index} className="event-item">
            <div className="event-date">{event.date}</div>
            <div className="event-details">
                <div className="event-title">{event.title}</div>
                <div className="event-time">{event.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;