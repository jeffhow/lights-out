import React from 'react';
import Board from './Board';
import Nav from './Nav';
import ControlPanel from './ControlPanel';
import { findSolution } from './findSolution';
import { getPuzzleConfig } from './puzzles';

import './Game.scss';

class Game extends React.Component{
    static defaultProps = {
        puzzleLevel: 0,
        boardSize: 5
    };

    constructor(props){
        super(props);
        
        this.levelSelect = this.levelSelect.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.initializePuzzle = this.initializePuzzle.bind(this);
        this.changeCell = this.changeCell.bind(this);
        this.help = this.help.bind(this);

        this.state = {
            puzzleLevel: localStorage.getItem('level') ? parseInt(localStorage.getItem('level')) : 0,
            puzzleState: this.initializePuzzle( localStorage.getItem('level') ? parseInt(localStorage.getItem('level')) : 0 ),
            hints:false,
            showNav:false,
            gameOver:false,
        };
        
    }

    initializePuzzle(n){
        // returns 2d puzzle array of 0s and 1s
        return getPuzzleConfig(n).map(c => (c.toString(2).padStart(this.props.boardSize,'0').split('').map(b => parseInt(b))));
    }

    changeCell(row, col){
        let newState = this.state;
        
        // change clicked cell
        newState.puzzleState[row][col] = 1 - newState.puzzleState[row][col]; // flips 0 and 1
        
        // change adjacent cells
        // Change X
        if(col > 0){
            newState.puzzleState[row][col-1] = 1 - newState.puzzleState[row][col-1]
        }
        if(col<this.props.boardSize-1){
            newState.puzzleState[row][col+1] = 1 - newState.puzzleState[row][col+1]
        }
        
        // Change Y
        if(row > 0){
            newState.puzzleState[row-1][col] = 1 - newState.puzzleState[row-1][col]
        }
        if(row < this.props.boardSize-1){
            newState.puzzleState[row+1][col] = 1 - newState.puzzleState[row+1][col]
        }
        
        // Check for win
        newState.gameOver = !newState.puzzleState.some( row => row.some( c => c===1 ) );
        
        // help script
        if(this.state.hints){
            this.help();
        }
        
        this.setState(newState);
    }

    help(){
        let newState = this.state
        newState.hints = findSolution(this.state.puzzleState);
        this.setState(newState);
    }

    levelSelect(n){
        
        const oldLevel = this.state.puzzleLevel;
        const newLevel = n < 100 ? n : oldLevel;
        
        localStorage.setItem('level', newLevel);
       
        const newState = {
            puzzleLevel: newLevel,
            puzzleState: this.initializePuzzle( newLevel ),
            hints: false,
            showNav: false,
            gameOver: false,
        };

        this.setState(newState);
    }
    

    toggleNav(){
        let newState = this.state;
        newState.showNav = !this.state.showNav;
        this.setState(newState);        
    }

    render(){
        return(
            <main className="Game">
                <header className="App-header header">
                    <h1><span>Lights</span> <span>Out</span></h1>
                    <Nav levelSelect={this.levelSelect} isVisible={this.state.showNav} toggleNav={this.toggleNav} />
                </header>
                <section className='game-area'>
                    <Board 
                        puzzleLevel={this.state.puzzleLevel} 
                        puzzleState={this.state.puzzleState}
                        changeCell={this.changeCell} 
                        hints={this.state.hints}
                        key={`testlevel-${this.state.puzzleLevel}`} 
                        gameOver={this.state.gameOver} />
                </section>
                <ControlPanel 
                    puzzleLevel={this.state.puzzleLevel} 
                    toggleNav={this.toggleNav} 
                    restart={this.levelSelect} 
                    help={this.help} />
                <footer className='App-footer'>
                    <div>
                    &copy;&nbsp;2020&nbsp;<a href="https://paladinwebgroup.com">Paladin Web Group <span className="brand"></span></a>
                    </div>
                </footer>
            </main>
        );
    }
}

export default Game;
