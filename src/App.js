import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sample from './sample.js';
import BasicRoutes from './routes/basicRoute'


function App() {
  return (
    <div className="App">
      < BasicRoutes />
      < Sample />
    </div>
  );
}

export default App;
