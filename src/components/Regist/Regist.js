import React, { Component } from "react";
import { Link } from 'react-router-dom';

import './Regist.css'

class Regist extends Component {
    render() {
        return (
            <div className="form-body">
                <h2 className='form-title'>sign up</h2>
                <form className='form'>
                    <div className='form__wrapper'>

                        <label htmlFor='email_field'>
                            Enter your email
                        </label>
                        <input
                            className='form__input'
                            id='email_field'
                            type='email'
                            name='login'
                        />

                        <label htmlFor='pass_field'>
                            Create a password
                        </label>
                        <input
                            className='form__input'
                            id='pass_field'
                            type='password'
                            name='password'
                        />

                        <label htmlFor='login_field'>
                            Enter a username
                        </label>
                        <input
                            className='form__input'
                            id='login_field'
                            type='text'
                            name='login'
                        />
                        <button className='form__btn'>
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

export default Regist;