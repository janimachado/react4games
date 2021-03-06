import React from 'react';
import "./App.css";
import Board from "./components/Board"
import { GAME_SIZE } from './settings/constants';

function App() {
  return (
    <div className="App">

      <div className="App-header" style={{
        position: 'relative',
        width: GAME_SIZE,
        height: GAME_SIZE,
      }}>
        <Board />
      </div>
    </div>
  );
}

export default App;
