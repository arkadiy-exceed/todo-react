import React from "react";
import { Component } from "react";
import CreateTask from "../CreateTask/CreateTask";
import Task from "../Task/Task";

import './TaskWrapper.css'

class TaskWrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                {id: 1, text: 'task1', done: false, like: false},
                {id: 2, text: 'task2', done: false, like: false},
                {id: 3, text: 'task3', done: false, like: false}
            ]
        }
        this.removeTask = this.removeTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.handleChangeDone = this.handleChangeDone.bind(this)
        this.handleChangeLike = this.handleChangeLike.bind(this)
    }

    removeTask(id) {
        this.setState({
            todos: this.state.todos.filter(item => item.id !== id)
        })
    }

    addTask(text) {
        const newTodo = {id: this.state.todos.length + 1, text: text, done: false, like: false}
        this.setState({
            todos: [newTodo, ...this.state.todos]
        })
        console.log(newTodo)
    }

    handleChangeDone(id) {
        const toodsChangeDone = this.state.todos.map(item => {
            if(id === item.id) {
                return {...item, done: !item.done}
            } else {
                return item
            }
        })
        this.setState({todos: toodsChangeDone})
        console.log(toodsChangeDone)
    }

    handleChangeLike(id) {
        const toodsChangeLike = this.state.todos.map(item => {
            if (id === item.id) {
                return {...item, like: !item.like}
            } else {
                return item
            }
        })
        this.setState({todos: toodsChangeLike})
        console.log(toodsChangeLike);
    }


    componentDidMount() {
        console.log('rendder', this.state)
    }

    componentDidUpdate() {
        console.log('render2', this.state)
    }

    componentWillUnmount() {
        console.log('3', this.state)
    }

    render() {
        return(
            <div className='task-wrapper'>

                <CreateTask 
                    placeholder='Add new Task'
                    addTask={this.addTask}
                />

                {this.state.todos.map(item => {
                    return(
                        <Task 
                            key={Math.random()}
                            id={item.id}
                            text={item.text}
                            done={item.done}
                            like={item.like}
                            removeTask={this.removeTask}
                            handleChangeDone={this.handleChangeDone}
                            handleChangeLike={this.handleChangeLike}
                        />
                    )
                })}
                

            </div>
        )
    }
}

export default TaskWrapper;