import React from "react";
import { Component } from "react";
import axios from "axios";

import './CreateTask.css'

class CreateTask extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: ''
        }
        this.changeValue = this.changeValue.bind(this)
        this.postTask = this.postTask.bind(this)
    }

    changeValue(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    postTask() {
        axios.post('http://localhost:5000/tasks/', {
            text: this.state.inputValue,
            done: false,
            like: false
        }).then(res=> {
            console.log(res)
            this.props.addTask(res.data)
        })
    }
    
    render() {
        const {placeholder} = this.props
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
                                this.postTask();
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