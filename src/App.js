import React from 'react';
import Game from './Game';
import './App.scss';

function App() {
  return (
    <main className="App grid-container">
      <header className="App-header header">
        <h1><span>Glow</span> <span>Stick</span></h1>
      </header>
      <section className='game-area'>
        <Game />
      </section>
      <div className='left-ad'></div>
      <div className='right-ad'></div>
      <footer className='footer'>
        <div>
          &copy;&nbsp;2020&nbsp;<a href="https://paladinwebgroup.com">Paladin Web Group <span className="brand"></span></a>
        </div>
      </footer>
    </main>
  );
}

export default App;
