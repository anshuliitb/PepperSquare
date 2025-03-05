import React, { useState, useEffect } from "react";
import "./EventsGallery.css";

const EventsGallery = ({ selectedCategory }) => {
  const [events, setEvents] = useState([]);
  const [popupImage, setPopupImage] = useState(null);

  useEffect(() => {
    fetch("http://localhost:1337/api/events?populate=*") // Strapi API call
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          const formattedEvents = data.data.map((event) => ({
            id: event.id,
            title: event.title,
            category: event.category,
            date: event.date,
            image: event.image?.url
              ? `http://localhost:1337${event.image.url}`
              : "/placeholder.jpg",
          }));
          setEvents(formattedEvents);
        } else {
          console.error("API returned unexpected structure:", data);
        }
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <div className="gallery">
      {filteredEvents.length > 0 ? (
        filteredEvents.map((event) => (
          <div
            key={event.id}
            className="event-card"
            onClick={() => setPopupImage(event)}
          >
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-info">
              <h3>{event.title}</h3>
              <p>{event.date}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No events found.</p>
      )}

      {popupImage && (
        <div className="popup-overlay" onClick={() => setPopupImage(null)}>
          <div className="popup-content">
            <img
              src={popupImage.image}
              alt={popupImage.title}
              className="popup-image"
            />
            <h3>{popupImage.title}</h3>
            <p>{popupImage.date}</p>
            <button
              className="close-button"
              onClick={() => setPopupImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsGallery;
