import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import axios from "axios";

import './Regist.css'


class Regist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputEmail: '',
            inputUsername: '',
            inputPassword: '',
            errorEmail: '',
            errorUsername: ''
        }
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(e) {
        e.preventDefault()

        axios.post('http://localhost:5000/auth/registration', {
            email: this.state.inputEmail,
            username: this.state.inputUsername,
            password: this.state.inputPassword
        })
        .then(res => {
            if (res.data.error === 'existing email') {
                this.setState({
                    errorEmail: res.data.error,
                    errorUsername: ''
                })
            } else if (res.data.error === 'existing username') {
                this.setState({
                    errorUsername: res.data.error,
                    errorEmail: ''
                })
            } else {
                this.setState({
                    errorEmail: '',
                    errorUsername: ''
                })
                const path = '/'; 
                this.props.history.push(path);
            }

            console.log(res)
        })
    }

    render() {
        return (
            <div className="form-body">
                <h2 className='form-title'>sign up</h2>
                <form
                    onSubmit={this.submitForm}
                    className='form'
                >
                    <div className='form__wrapper'>

                        <label htmlFor='email_field'>
                            Enter your email
                        </label>
                        <input
                            onChange={e => this.setState({
                                inputEmail: e.target.value
                            })}
                            className='form__input'
                            id='email_field'
                            type='email'
                            name='login'
                            pattern='^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i'
                            title='Введите корректный Email'
                        />
                        {this.state.errorEmail &&
                            <div className='form__input_error'>
                                {this.state.errorEmail}
                            </div>
                        }

                        <label htmlFor='login_field'>
                            Enter a username
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
                        {this.state.errorUsername &&
                            <div className='form__input_error'>
                                {this.state.errorUsername}
                            </div>
                        }


                        <label htmlFor='pass_field'>
                            Create a password
                        </label>
                        <input
                            onChange={e => this.setState({
                                inputPassword: e.target.value
                            })}
                            className='form__input'
                            id='pass_field'
                            type='password'
                            name='password'
                            pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$'
                            title='Пароль должен состоять минимум из 6 символов, включая минимум одну заглавную букву, цифру и специальный символ'
                        />

                        <button
                            className='form__btn'
                        >
                            sign up
                        </button>
                    </div>
                </form>

                <div className='form-footer'>
                    <p>
                        You have an account?
                        <Link className='form-footer__link' to='/auth'> Sign in
                        </Link>
                    </p>
                </div>
            </div>
        )
    }
}

export default withRouter(Regist);