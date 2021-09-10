import React, { Component } from "react";
import { Link } from 'react-router-dom';

import './Auth.css'

class Auth extends Component {
    render() {
        return (
            <div className="form-body">
                <h2 className='form-title'>sign in</h2>
                <form className='form'>
                    <div className='form__wrapper'>
                        <label htmlFor='login_field'>
                            Username
                        </label>
                        <input
                            className='form__input'
                            id='login_field'
                            type='text'
                            name='login'
                        />

                        <label htmlFor='pass_field'>
                            Password
                        </label>
                        <input
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