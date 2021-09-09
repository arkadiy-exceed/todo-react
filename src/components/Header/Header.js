import React from "react";
import { Component } from "react";
import H1 from "./H1";

import './Header.css'

class Header extends Component {
    render() {
        return(
            <header className='header'>
                <H1 title='Todo List'/>
            </header>
        )
    }
}

export default Header;