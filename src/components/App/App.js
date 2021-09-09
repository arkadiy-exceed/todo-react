import React from "react";
import { Component } from "react";
import Header from "../Header/Header";
import TaskWrapper from "../TaskWrapper/TaskWrapper";

class App extends Component {
    render() {
        return(
            <div>
                <Header/>
                <TaskWrapper></TaskWrapper>
            </div>
        )
    }
}

export default App;