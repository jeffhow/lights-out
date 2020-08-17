import React from 'react';
import Cell from './Cell';
import './Game.scss'

class GameRandom extends React.Component{
    static defaultProps = {
        gridX:5,
        gridY:5
    };

    constructor(props){
        super(props);

        // State is null if this function is bound after this.state ???
        this.changeCell = this.changeCell.bind(this);

        this.state = {
            cellData: this.createCellData(),
        };
        this.createCellData = this.createCellData.bind(this);
        this.renderBoard = this.renderBoard.bind(this);
        this.restart = this.restart.bind(this);
        this.cheat = this.cheat.bind(this);
    }   

    createCellData(){
        const y = this.props.gridY;
        const x = this.props.gridX;

        let cellData = Array.from( { length: y }, 
            (row,i) => ( Array.from( { length: x }, 
                (cell,j) => {
                        let status = Math.floor(Math.random()*100) < 50;
                        return( { on:  status } );
                    }
                ) 
            )
        );
        
        // while(!this.checkSum(cellData)){
        //     this.createCellData();
        // }
        return cellData;
    }

    checkSum(arr){
        let y = arr.length;
        let x = arr[0].length;
        let rowSum = 0;
        let colSum = 0;
        
        // Check the rows
        for(let i=0; i<y; i++){
            for(let j=0; j<x; j++){
                if(arr[i][j].on){ rowSum++; }
            }
            if(rowSum % 2 === 0){
                rowSum=0
            }else{
                console.log(rowSum);
                return false;
            }
        }
        
        // check the Cols
        for(let j=0; j<y; j++){
            for(let i=0; i<x; i++){
                if(arr[i][j].on){ colSum++; }
            }
            if(colSum % 2 === 0){
                colSum=0
            }else{
                console.log(colSum);
                return false;
            }
        }
        return true;
    }
    
    changeCell(r,c){
        let newState = this.state;
        // change clicked cell
        newState.cellData[r][c].on = !newState.cellData[r][c].on;
        // change x adjacent cells
        if(r>0){
            newState.cellData[r-1][c].on = !newState.cellData[r-1][c].on;
        }
        if(r<this.props.gridY-1){
            newState.cellData[r+1][c].on = !newState.cellData[r+1][c].on;
        }
        // change y adjacent cells
        if(c>0){
            newState.cellData[r][c-1].on = !newState.cellData[r][c-1].on;
        }
        if(c<this.props.gridX-1){
            newState.cellData[r][c+1].on = !newState.cellData[r][c+1].on;
        }

        this.setState(newState);
    }

    cheat(){
        let newState = this.state;
        newState.cellData.map( row => row.map( cell => cell.on = false));

        this.setState(newState);
        console.log('Cheater!!!');
    }

    restart(){
        const newState = {
            cellData: this.createCellData(this.props.nCells),
        };
        this.setState(newState);
    }

    renderBoard(){
        return( this.state.cellData.map( 
                (row, i) => row.map( 
                    (cell, j) => <Cell key={[i,j]} itemId={[i,j]}
                            changeCell={this.changeCell}
                            on={ cell.on } />
        )));
    }

    render(){
        let gameOver = !this.state.cellData.flat().some( c => c.on );
        return(
            <div className="Game">
                { gameOver 
                ? <div>
                    <h1 className="win"><span>You</span>&nbsp;<span>Win!</span></h1>
                    <button className="playAgain" onClick={this.restart}>Play again</button>
                  </div>

                : <div className="Game-board">{this.renderBoard()}</div>
                }
                <button onClick={this.cheat} className="Game-cheat">Cheat</button>            
            </div>
        );
    }
}

export default GameRandom;