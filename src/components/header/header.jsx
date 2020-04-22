import React from 'react';
import SearchBar from './searchBar'
import logo from '../../media/logo.png'
import git from '../../media/github.png'
import '../Style.css';

const Header = props => {
    return (
        <div className="Header">
            <a href="." className="HeaderBanner noDec">
                <img className="HeaderLogo" src={logo} alt={"logo-pic"}/>
                <h1 className="HeaderText"onClick={(e) => {props.updateResponse(""); props.clickedOnVideo("")}}>MyTube</h1>
            </a>
            <SearchBar updateResponse={props.updateResponse}/>
            <div style={{height: "100%", width: "15%"}}>
                <a href="https://github.com/TheFallender" style={{marginLeft: "60%"}}>
                    <img className="HeaderLogo" src={git} alt={"git-pic"}/>
                </a>
            </div>
            
            
        </div>
    );
}

export default Header;