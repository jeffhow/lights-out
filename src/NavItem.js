import React from 'react';
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavItem extends React.Component{
    constructor(props){
        super(props);
        this.levelSelect = this.levelSelect.bind(this);
    }

    levelSelect(){
        this.props.levelSelect(this.props.level);
    }

    render(){
        return(
            <button className="NavItem Game-btn" onClick={this.levelSelect} >Level {this.props.level} <FontAwesomeIcon icon={faLockOpen} /></button>
        );
    }
}

export default NavItem;
