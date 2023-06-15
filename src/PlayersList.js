import React from 'react';
import players from './Components/players';
import Player from './Player';
const PlayersList = () => {
  return (
    <div>
      {players.map((player) => (
        <Player key={player.name} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;

