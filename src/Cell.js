import React from 'react';
import './Cell.scss'

class Cell extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.props.changeCell( ...this.props.itemId.split(',').map(Number) );
    }

    render(){
        let val = this.props.on > 0 ? 'Cell on' : 'Cell';
        let hint = this.props.hint > 0 ? 'hint' : '';
        return(
            <div className={`${val} ${hint}`} onClick={this.handleClick} ></div>
        );
    }
}

export default Cell;
