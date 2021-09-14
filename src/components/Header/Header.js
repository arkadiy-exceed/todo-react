import React from "react";
import { Component } from "react";
import { withRouter } from "react-router";
import H1 from "./H1";

import './Header.css'

class Header extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            classHeaderNav: 'header__nav'
        }
        this.handleHeaderNav = this.handleHeaderNav.bind(this)
        this.exit = this.exit.bind(this)
    }

    handleHeaderNav() {
        if (this.state.classHeaderNav === 'header__nav') {
            this.setState({
                classHeaderNav: 'header__nav show'
            })
        } else {
            this.setState({
                classHeaderNav: 'header__nav'
            })
        }
    }

    exit() {
        const path = '/auth'; 
        this.props.history.push(path);
    }

    render() {
        return(
            <header className='header'>
                <H1 title='Todo List'/>

                <div className='header__arrow'>
                    <img src='ar.png' alt='arrow' onClick={this.handleHeaderNav}/>
                </div>

                <div className={this.state.classHeaderNav}>
                    <div>
                        <a className='header__nav_link' href='#1'>bla</a>
                    </div>
                    <div>
                        <a className='header__nav_link' href='#1'>blabla</a>
                    </div>
                    <div>
                        <a className='header__nav_link' href='#1'>blablabla</a>
                    </div>
                    <div>
                        <a className='header__nav_link' href='#1' onClick={this.exit}>exit</a>
                    </div>
                </div>
            </header>
        )
    }
}

export default withRouter(Header);