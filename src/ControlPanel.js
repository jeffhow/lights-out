import React from 'react';
import './ControlPanel.scss';
import { faUndoAlt, faArrowRight, faLifeRing, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ControlPanel extends React.Component{
    constructor(props){
        super(props);
        this.restart = this.restart.bind(this);
    }

    restart(){
        this.props.restart(this.props.puzzleLevel);
    }

    render(){
        return(
            <section className="ControlPanel">
                <h2><span>Level</span> <span>{this.props.puzzleLevel}</span></h2>
                <div className="ControlPanel-controls">
                    <button onClick={this.restart} className="Game-btn"><FontAwesomeIcon icon={faUndoAlt} /> Restart</button>  
                    <button onClick={this.props.help} className="Game-btn"><FontAwesomeIcon icon={faLifeRing} /> Help</button>  
                    <button onClick={this.props.toggleNav} className="Game-btn"><FontAwesomeIcon icon={faCog} /> Levels</button> 
                </div>
            </section>
        );
    }
}

export default ControlPanel;
