import './App.css';
import React from 'react';
import Program from './components/Program';
import HistoryPrograms from './components/HistoryPrograms';

function App() {
  return (
    <main role='main' className='container text-center' >
      <h1>Jugá a los 8 escalones desde casa!</h1>
      <Program></Program>
      {/* <HistoryPrograms></HistoryPrograms> */}
    </main>
  );
}

export default App;
