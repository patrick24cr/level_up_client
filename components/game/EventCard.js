import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';

const EventCard = ({
  game, //
  description,
  date,
  time,
  organizer,
}) => (
  <Card className="text-center">
    <Card.Header>{game}</Card.Header>
    <Card.Body>
      <Card.Title>Organizer: {organizer}</Card.Title>
      <Card.Text>Description: {description}</Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted">When: {date} at {time}</Card.Footer>
  </Card>
);

EventCard.propTypes = {
  game: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  organizer: PropTypes.number.isRequired,
};

export default EventCard;
