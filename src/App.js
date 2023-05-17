import React from 'react';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div>
      <h1 className='mx-5'>Tooltip Example </h1>
      <Tooltip text="Hello, world!">
        <button style={{background:"RED",fontSize:"40px"}}>Press</button>
      </Tooltip>
    </div>
  );
};

export default App;

