import React from 'react';
import './Cell.scss'

class Cell extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.props.changeCell(...this.props.itemId);
    }

    render(){
        let val = this.props.on ? 'Cell on' : 'Cell';
        return(
            <div className={val} onClick={this.handleClick} ></div>
        );
    }
}

export default Cell;
