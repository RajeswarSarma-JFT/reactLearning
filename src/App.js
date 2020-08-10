import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sample from './sample.js';
import BasicRoutes from './routes/basicRoute'
import BasicGet from './http/get'

function App() {
  return (
    <div className="App">
      <BasicGet/>
      < BasicRoutes />
      < Sample />
    </div>
  );
}

export default App;
