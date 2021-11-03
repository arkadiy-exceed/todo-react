import React from "react";
import { Component } from "react";
import { Switch, Route, Link } from 'react-router-dom';
import Auth from "../Auth/Auth";
import Header from "../Header/Header";
import Regist from "../Regist/Regist";
import TaskWrapper from "../TaskWrapper/TaskWrapper";

import './App.css'

class App extends Component {
    render() {
        return(
            <div>
                <nav className='nav'>
                    <Link className='nav__link' to='/'>Home</Link>
                    <Link className='nav__link' to='/auth'>Sign in</Link>
                    <Link className='nav__link' to='/regist'>Sign up</Link>
                </nav>

                <Switch>
                    <Route exact path='/'>
                        <Header/>
                        <TaskWrapper/>
                    </Route>

                    <Route exact path='/auth'>
                        <Auth/>
                    </Route>

                    <Route exact path='/regist'>
                        <Regist/>
                    </Route>
                </Switch>
                
                
            </div>
        )
    }
}

export default App;