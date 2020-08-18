import React from 'react';
import Cell from './Cell';
import './Board.scss'
import {getPuzzleConfig} from './puzzles';
import { faUndoAlt, faArrowRight, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Board extends React.Component{
    static defaultProps = {
        puzzleLevel: 0,
        boardSize: 5,
        gameOver:false,
    };

    constructor(props){
        super(props);
        // State is null if this function is bound after this.state ???
        this.changeCell = this.changeCell.bind(this);
        this.state = {
            puzzleData: this.createPuzzleData(),
            gameOver: this.props.gameOver,
            board: this.renderBoard(this.createPuzzleData()),
        };
        this.createPuzzleData = this.createPuzzleData.bind(this);
        this.renderBoard = this.renderBoard.bind(this);
        this.restart = this.restart.bind(this);
    }   
    
    createPuzzleData(){
        let config = getPuzzleConfig(this.props.puzzleLevel).map(p => (p*2)); // mult the puzzle vector by 2 because k starts at 2
        
        const b = config.length; // board size
        let puzzle = [];
        
        for(let i=0;i<b;i++){
            let k=2;
            for(let j=0;j<b;j++){
                puzzle.push( (config[i]&k) > 0 ) // does the bitwise operator return > 0 ? true : false
                k+=k; // k increments the binary place value
            }
        }
        return(puzzle);

    }
    

    changeCell(p){
        const b = this.props.boardSize; // board size
        let newState = this.state;
        // change clicked cell
        newState.puzzleData[p] = !newState.puzzleData[p];
        
        // change adjacent cells

        // Change X
        if(p%b!==0){ // Not in the left hand col -> change left cell
            newState.puzzleData[p-1] = !newState.puzzleData[p-1];
        }

        if(p%b!==b-1){ // Not in the right hand col -> change right cell
            newState.puzzleData[p+1] = !newState.puzzleData[p+1];
        }
        
        
        // Change Y
        if(p-b >= 0){ // Not in the Top row -> change upper cell
            newState.puzzleData[p-b] = !newState.puzzleData[p-b];
        }

        if(p+b < b*b){ // Not in the bottom row -> change lower cell
            newState.puzzleData[p+b] = !newState.puzzleData[p+b];
        }
        
        // Check for win
        newState.board = this.renderBoard(newState.puzzleData);
        newState.gameOver = !newState.puzzleData.some( c => c );
        this.setState(newState);
    }

    restart(){
        const newState = {
            puzzleData: this.createPuzzleData(),
            gameOver:false,
            board: this.renderBoard(this.createPuzzleData()),
        };
        this.setState(newState);
    }

    // Loop over puzzle and create cells
    renderBoard(puzzleData){
        return( 
            puzzleData.map( (c, i) => <Cell key={i} itemId={i} changeCell={this.changeCell} on={ c } /> )
        );
    }

    render(){
        return(
            <div className="Board">
                { this.state.gameOver 
                ? <div>
                    <div className="Board-puzzle win">
                        <div>You</div>
                        <div>Win!</div>
                    </div>
                    <h2><span>Level</span> <span>{this.props.puzzleLevel}</span></h2>
                    <button onClick={this.restart} className="Game-btn"><FontAwesomeIcon icon={faUndoAlt} /> Restart</button>  
                    <button className="Game-btn" onClick={this.props.nextLevel}><FontAwesomeIcon icon={faArrowRight} /> Next Level</button> 
                  </div>

                : <div>
                    <div className="Board-puzzle">{this.state.board}</div>
                    <h2><span>Level</span> <span>{this.props.puzzleLevel}</span></h2>
                    <button onClick={this.restart} className="Game-btn"><FontAwesomeIcon icon={faUndoAlt} /> Restart</button>  
                    
                    {/**
                     * Will add level select as nav
                     * 
                     
                     <button onClick={this.restart} className="Game-btn"><FontAwesomeIcon icon={faCog} /> Levels</button>  

                     */}
                </div>          
                }            
            </div>
        );
    }
}

export default Board;
