import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

import './Auth.css'


class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputUsername: '',
            inputPassword: ''
        }
        this.submitForm = this.submitForm.bind(this)
    }

    submitForm(e) {
        e.preventDefault()

        axios.post('http://localhost:5000/auth/login', {
            username: this.state.inputUsername,
            password: this.state.inputPassword
        }).then(res => console.log(res))
    }

    render() {
        return (
            <div className="form-body">
                <h2 className='form-title'>sign in</h2>
                <form 
                    onSubmit={this.submitForm} 
                    className='form'
                >
                    <div className='form__wrapper'>
                        <label htmlFor='login_field'>
                            Username
                        </label>
                        <input
                            onChange={e => this.setState({
                                inputUsername: e.target.value
                            })}
                            className='form__input'
                            id='login_field'
                            type='text'
                            name='login'
                        />

                        <label htmlFor='pass_field'>
                            Password
                        </label>
                        <input
                            onChange={e => this.setState({
                                inputPassword: e.target.value
                            })}
                            className='form__input'
                            id='pass_field'
                            type='password'
                            name='password'
                        />
                        <button className='form__btn'>
                            sign in
                        </button>
                    </div>
                </form>

                <div className='form-footer'>
                    <p>
                        New user? 
                        <Link className='form-footer__link' to='/regist'> Create an account
                        </Link>
                    </p>
                </div>
            </div>
        )
    }
}

export default Auth;