import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { getGames } from '../../utils/data/gameData';
import { createEvent } from '../../utils/data/eventData';

const EventForm = ({ user }) => {
  const [games, setGames] = useState([]);
  /*
  Since the input fields are bound to the values of
  the properties of this state variable, you need to
  provide some default values.
  */
  const [currentEvent, setCurrentEvent] = useState({
    game: 1,
    description: '',
    date: '',
    time: '',
    organizer: 1,
  });
  const router = useRouter();

  useEffect(() => {
    getGames().then(setGames);
    // TODO: Get the game types, then set the state
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // TODO: Complete the onChange function
  };

  const handleSubmit = (e) => {
    // Prevent form from being submitted
    e.preventDefault();

    const event = {
      game: Number(currentEvent.game),
      description: currentEvent.description,
      date: currentEvent.date,
      time: currentEvent.time,
      organizer: user.uid,
    };

    // Send POST request to your API
    createEvent(event).then(() => router.push('/events'));
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Description</Form.Label>
        <Form.Control name="description" required value={currentEvent.description} onChange={handleChange} />
        <Form.Label>Date</Form.Label>
        <Form.Control name="date" required value={currentEvent.date} onChange={handleChange} />
        <Form.Label>Time</Form.Label>
        <Form.Control name="time" required value={currentEvent.time} onChange={handleChange} />
        <Form.Label>Game</Form.Label>
        <Form.Select onChange={handleChange} className="mb-3" name="game" required>
          <option value="">Select Game</option>
          {games?.map((game) => (
            <option key={game.id} value={game.id}>
              {game.title}
            </option>
          ))}
        </Form.Select>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

EventForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventForm;
