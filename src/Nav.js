import React from 'react';
import NavItem from './NavItem';
import { faLock, faLockOpen, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Nav.scss';

class Nav extends React.Component{

    render(){
        let navItems = Array.from({length:100}, (x, i) => (
            <NavItem level={i} key={`NavItem-${i}`} levelSelect={this.props.levelSelect} />
        ));

        let visible = this.props.isVisible ? 'show':'close';

        return(
            <nav className={`Nav ${visible}`}>
                <a onClick={this.props.toggleNav} href="#0" className="Nav-close"><FontAwesomeIcon icon={faTimes} /></a>
                <div>
                    {navItems}
                    {/* <li><a href="#0">Level 0 <FontAwesomeIcon icon={faLockOpen} /></a><small>Best Time: --:--</small></li> */}
                    
                </div>
            </nav>
        );
    }
}

export default Nav;
