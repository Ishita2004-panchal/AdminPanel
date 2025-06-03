import React, { useState } from 'react'
import Header from './Header';

function Login({ theme }) {
    const [formdata, setFromdata] = useState({
        email: '',
        password: '',
        emailError: '',
        passwordError: '',
    });
    const definedEmail = 'ispanchal165@gmail.com';
    const definedPassword = '12345678';

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email) {
            return 'Email is required';
        }
        else if (!emailRegex.test(email)) {
            return 'Enter valid EmailId';
        }
        else {
            return '';
        }
    }
    const validatePassword = (password) => {
        if (!password) {
            return 'password id required';
        }
        else if (password.length > 8) {
            return 'password must be of 8 character only';
        }
        else if (password.length < 8) {
            return 'password must be atleast 8 character';
        }
        else {
            return '';
        }
    }
    const handleEmailChange = (e) => {
        const value = e.target.value;
        const emailError = validateEmail(value);

        setFromdata((prevdata) => ({
            ...prevdata,
            email: value,
            emailError: emailError,
        }))
    }

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        const passwordError = validatePassword(value);

        setFromdata((prevdata) => ({
            ...prevdata,
            password: value,
            passwordError: passwordError,
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const ValidateEmailError = validateEmail(formdata.email);
        const validatePasswordError = validatePassword(formdata.password);

        if (ValidateEmailError || validatePasswordError) {
            setFromdata((prevdata) => ({
                ...prevdata,
                emailError: ValidateEmailError,
                passwordError: validatePasswordError,
            }))
        }
        else if (formdata.email === definedEmail && formdata.password === definedPassword) {
            alert("login successfully")
        }
        else {
            alert("invalid Email or Password")
        }

    };
    const resetForm = () => {
        setFromdata({
            email: '',
            password: '',
            emailError: '',
            passwordError: '',
        });
    };

    const handleCloseLogin = () => {
        resetForm();
    }

    return (
        <div className='d-flex align-items-center justify-content-center mt-5'>
            <div className={`img w-25 d-flex align-items-center justify-content-center rounded-3 ${theme === "light" ? "text-dark border border-dark" : "text-light border border-white"}`} style={{ backgroundColor: theme === "light" ? "#fff" : "transparent" }}>
                {/* <Header /> */}
                {/* <img src="../../project/public/pexels-pixabay-73873 (2).jpg" /> */}
                <div className="Form2">
                    <form onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email"
                                className={`form-control ${formdata.emailError ? 'is-invalid' : ''}`}
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="abcd@gmail.com"
                                onChange={handleEmailChange}
                                value={formdata.email} />
                            <div className="invalid-feedback">
                                {formdata.emailError || ''}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className={`form-control ${formdata.passwordError ? 'is-invalid' : ''}`}
                                id="exampleInputPassword1"
                                placeholder="Password"
                                onChange={handlePasswordChange}
                                value={formdata.password} />
                            <div className="invalid-feedback">
                                {formdata.passwordError || ''}
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary buttons" onClick={handleSubmit}>Submit</button>
                        <button type="button" className="btn btn-primary buttons" onClick={handleCloseLogin}>Close</button>
                        <p>
                            Don't have an Account ?
                            <a href="/register">Register</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default Login;