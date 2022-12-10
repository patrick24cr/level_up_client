import React, { useEffect, useState } from 'react';
import EventCard from '../../components/game/EventCard';
import { getEvents } from '../../utils/data/eventData';

function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then((data) => setEvents(data));
  }, []);

  return (
    <article className="games">
      <h1>Events</h1>
      {events.map((event) => (
        <section key={`event--${event.id}`} className="event">
          <EventCard game={event.game} organizer={event.organizer} description={event.description} date={event.date} time={event.time} />
        </section>
      ))}
    </article>
  );
}

export default Home;
