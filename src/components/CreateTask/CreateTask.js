import React from "react";
import { Component } from "react";

import './CreateTask.css'

class CreateTask extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: ''
        }
        this.changeValue = this.changeValue.bind(this)
    }

    changeValue(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    
    render() {
        const {placeholder, addTask} = this.props
        return(
            <div className='task-form'>
                <div className='task-form__input'>
                    <input
                        type='text'
                        placeholder={placeholder}
                        onChange={this.changeValue}
                        value={this.state.inputValue}
                    />
                </div>
                <div className='task-form__button'>
                    <button
                        onClick={() => {
                            if(this.state.inputValue === '') {
                                return
                            } else {
                                addTask(this.state.inputValue)
                                this.setState({inputValue: ''})
                            } 
                        }}
                    >
                        Add
                    </button>
                </div>
            </div>
        )
    }
}

export default CreateTask;