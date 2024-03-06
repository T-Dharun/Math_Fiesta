import React from "react";
import "./event.css"; // Import your custom CSS file
import img2 from "../../assets/paper.jpg";
import img3 from "../../assets/gears.jpg";
import img4 from "../../assets/quiz.jpg";
import img6 from "../../assets/trea.jpg";
import img7 from "../../assets/mehan.jpg";
import img8 from "../../assets/rang.jpeg";
import Poster from "../poster/poster";
const EventCard = ({ event }) => {

  return (
    <div className="event-card">
      <img src={event.image} alt={event.title} className="event-image" />
      <div className="event-details">
        <h1 className="event-title">{event.title}</h1>
        <ul className="event-description">
          {event.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        
      </div>
      <div className="button-container">
      <button className="register-button">
        <a href={event.registrationLink} target={'_blank'} rel="noreferrer">
        Register
        </a>
        </button>
    </div>
    </div>
  );
};

const Events = () => {
  return (  
    <div className="pt-20 event">
        <Poster/>
      <p className="event-topic">Technical Events</p>

      <div className="event-container">
        {eventsData.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      <p className="event-topic">Non Technical Events</p>

      <div className="event-container">
        {eventsData1.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};
const eventsData = [
    {
      id: 1,
      title: "Oratysta",
      image: img2,
      description: [
        "A team of maximum 3 members can participate.",
        "Teams will be short-listed based on abstract.",
        "5 minutes will be provided for presentation and 2 minutes for queries.",
        "Abstract submission last date - 07.04.2024",
        "Date and Time - 13.04.2024 & 1:30PM",
      ],
      registrationLink: "https://forms.gle/hMymcjwZFNz5GEnx8",
    },
    {
      id: 2,
      title: "Mata Posta",
      image: img3,
      description: [
        "A team of maximum 2 members can participate.",
        "Design can be done either in Canva or Figma.",
        "Theme will be given instantly.",
        "Animatic elements should be included in the design.",
        "Date and Time: 13.04.2024 & 9:30AM",
      ],
      registrationLink: "https://forms.gle/ZxD2Py4TMMB8oH1y7",
    },
    {
      id: 3,
      title: "Triasta",
      image: img4,
      description: [
        "A team of 2 members should participate.",
        "Event will contain 3 rounds.",
        "Further information will be given onspot.",
        "Date and Time: 13.04.2024 & 09:30 AM",
      ],
      registrationLink: "https://forms.gle/VuUnDpxZsNsMwmke6",
    },
  ];
  const eventsData1 = [
    {
      id: 1,
      title: "Bidding blasta",
      image: img6,
      description: [
        "A team of 3 members should participate.",
        "Prelims will be conducted on 09.04.2024.",
        " Selected teams will be participating on 13.04.2024.",
        "Juries decision will be final.",
        "Date and Time: 13.04.2024 & 01.30PM",
      ],
      registrationLink: "https://forms.gle/LuD4E31m2TRzoi547",
    },
    {
      id: 2,
      title: "Heno desta",
      image: img7,
      description: [
        "A team should contain two members.",
        "Every team will be provided 1 hour.",
        "The necessary materials should be brought by the team members",
        "Date and Time: 13.04 2024 & 02:30PM",
      ],
      registrationLink: "https://forms.gle/U5g2ysCymKKygxk89",
    },
    {
      id: 3,
      title: "Advo zapsta",
      image: img8,
      description: [
        "A team of 3 members should participate.",
        "A product will be chosen by you onspot.",
        "Poster should be made for the given product.",
        "The team should advertise the product for 5 minutes.",
        "Team members should bring Poster creating Materials like charts & sketches by themselves.",
        "Juries decision will be final.",
        "Date and Time: 13.04.2024 & 11:00 AM",
      ],
      registrationLink: "https://forms.gle/SLhYSapzoJTE7UJf9",
    },
  ];
export default Events;
