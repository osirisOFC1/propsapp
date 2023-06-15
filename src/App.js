import React from 'react';
import PlayersList from './PlayersList';
import './Players.css'
const App = () => {
  return (
    <div className='inna'>
      <h1   className='title-animation'          style={{ color: 'black', textAlign: 'center' }}>Player Cards</h1>

      <PlayersList/>
    </div>
  );
};

export default App;
