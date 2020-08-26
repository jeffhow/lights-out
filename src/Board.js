import React from 'react';
import Cell from './Cell';
import './Board.scss'

class Board extends React.Component{
    static defaultProps = {
        puzzleLevel: 0,
        gameOver: false,
    };

    constructor(props){
        super(props);

        this.state = {
            hints: false,
            gameOver: this.props.gameOver,
        };

        this.renderBoard = this.renderBoard.bind(this);


    }   

    
    renderBoard(){
        return this.props.puzzleState.map( (row,i) => row.map( (cell,j) => <Cell
                                                                                on={cell} key={`${i},${j}`} 
                                                                                itemId={`${i},${j}`} 
                                                                                hint={this.props.hints ? this.props.hints[i][j] : 0}
                                                                                changeCell={this.props.changeCell}/>) );
    }
    

    

    render(){
        return(
            <div className="Board">
                { this.props.gameOver
                ? <div>
                    <div className="Board-puzzle win">
                        <div>You</div>
                        <div>Win!</div>
                    </div>
                  </div>

                : <div>
                    <div className="Board-puzzle">{this.renderBoard()}</div>
                </div>          
                }            
            </div>
        );
    }
}

export default Board;
