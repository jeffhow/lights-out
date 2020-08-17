import React from 'react';
import Board from './Board';
import './Game.scss'

class Game extends React.Component{

    constructor(props){
        super(props);
        
        this.nextLevel = this.nextLevel.bind(this);
        this.state = {
            puzzleLevel: localStorage.getItem('level') ? parseInt(localStorage.getItem('level')) : 0,
        };
        
    }  
    
    nextLevel(){
        const oldLevel = this.state.puzzleLevel;
        const newLevel = oldLevel <= 100 ? oldLevel + 1 : oldLevel;
        localStorage.setItem('level', newLevel);
        const newState = { puzzleLevel: newLevel }
        this.setState(newState);
    }

    render(){
        return(
            <div className="Game">
                <Board puzzleLevel={this.state.puzzleLevel} nextLevel={this.nextLevel} key={`level-${this.state.puzzleLevel}`} />
            </div>
        );
    }
}

export default Game;
