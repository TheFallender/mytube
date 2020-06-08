import React from 'react';
import SearchBar from './searchBar'
import logo from '../../media/logo.png'
import git from '../../media/github.png'
import '../Style.css';

const Header = props => {
    return (
        <div className="Header">
            <div className="HeaderBack">
                <a href="." className="HeaderBanner noDec">
                    <img className="HeaderLogo" src={logo} alt={"logo-pic"}/>
                    <h1 className="HeaderText"onClick={(e) => props.updateResponse(null)}>MyTube</h1>
                </a>
                <a className="HeaderGithub" href="https://github.com/TheFallender" style={{height: "100%"}}>
                    <img className="HeaderLogo" src={git} alt={"git-pic"}/>
                </a>
            </div>
            <div className="HeaderMenu">
                <SearchBar updateResponse={props.updateResponse}/>
            </div>
        </div>
    );
}

export default Header;