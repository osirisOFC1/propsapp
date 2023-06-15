import React from 'react';
import Card from 'react-bootstrap/Card';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    // wrapping the card into a container 
    <div className="player-container">
      {/* // wrapping the card into a container  */}
      <Card className="player-card">
        <Card.Img className="player-image" variant="top" src={imageUrl} />
        <Card.Body className='yoho'>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Team:</strong> {team}
            <br />
            <strong>Nationality:</strong> {nationality}
            <br />
            <strong>Jersey Number:</strong> {jerseyNumber}
            <br />
            <strong>Age:</strong> {age}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};


export default Player;

