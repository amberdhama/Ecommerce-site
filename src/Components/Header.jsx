import React from "react";
import Nav from "./Nav";
import HeroHeader from "./HeroHeader";
function Header(){
    return (
        <div className="header">
            <div className="container">
                <Nav/>
                <HeroHeader/>
            </div>
        </div>
    );
}

export default Header