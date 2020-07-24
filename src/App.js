import React from 'react';
import Game from './Game';
import './App.scss';

function App() {
  return (
    <main className="App grid-container">
      <header className="App-header header">
        <h1><span>Lights</span> <span>Out</span></h1>
      </header>
      <section className='game-area'>
        <Game />
      </section>
      <footer className='footer'>
        <div>
          &copy;&nbsp;2020&nbsp;<a href="https://paladinwebgroup.com">Paladin Web Group <span className="brand"></span></a>
        </div>
      </footer>
    </main>
  );
}

export default App;
