import React from "react";
import { Component } from "react";

import './Task.css'

class Task extends Component {

    render() {
        const {text, removeTask, id, done, like, handleChangeDone, handleChangeLike} = this.props
        return(
            <div className={done ? 'task done' : 'task'}>
                <div className={like ? 'like like-block' : 'like'}>
                    <img 
                        className='like__img' 
                        src='Heart.svg.png'
                        alt='Heart'
                    />
                </div>
                <div 
                    className='task__text' 
                    onDoubleClick={() => handleChangeLike(id)}
                >
                    <p>{text}</p>
                </div>
                <div className='task__buttons'>
                    <input
                        type='checkbox'
                        className='btn-done'
                        checked={done}
                        onChange={() => {handleChangeDone(id)}}
                    />
                    <button 
                        className='btn-delete'
                        onClick={() => {removeTask(id)}}
                    >
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}

export default Task;