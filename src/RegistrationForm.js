import React, { useState } from "react";
import "./RegForm.css";

const RegistrationForm = () => { 
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstnameError, setFirstnameError] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSubmit = event => {
        event.preventDefault();

        let firstnameValid = false;
        const regexfName = /^[a-zA-Z]+$/;
        if (!regexfName.test(firstname)) {
            setFirstnameError("Please enter a valid name. Only letters")
        }
        else {
            setFirstnameError("");
            firstnameValid = true;
        }

        let lastnameValid = false;
        const regexlName = /^[a-zA-Z]+$/;
        if (!regexlName.test(lastname)) {
            setLastnameError("Please enter a valid name. Only letters")
        }
        else {
            setLastnameError("");
            lastnameValid = true;
        }

        let emailValid = false;
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regexEmail.test(email)) {
            setEmailError("Please enter a valid email.")
        }
        else {
            setEmailError("");
            emailValid = true;
        }

        let passwordValid = false;
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&]).{8,}$/;
        if (!regexPassword.test(password)) {
            setPasswordError("Please the valid password includes at minimum: 1 lowercase letter, 1 uppercase letter, 1 number and 1 character. Password should be minimum 8 characters")
        }
        else {
            setPasswordError("");
            passwordValid = true;
        }

        if (firstnameValid && lastnameValid && emailValid && passwordValid) {
            alert('Firstname: ' + firstname + '\nLastname: ' + lastname + '\nEmail: ' + email + '\nPassword: ' + password +  '\n' + firstname + ' ' + lastname + ' you are successfully registered!');
            setFirstname("");
            setLastname("");
            setEmail("");
            setPassword("");
        }
    }

    return (
        <div id="registration">
            <form className="registrationForm" onSubmit={handleSubmit} autoComplete="off">
                <div className="input-container">
                    <label htmlFor="firstname">Firstname:</label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        onChange={event => setFirstname(event.target.value)}
                        value={firstname}
                    />
                    <p className="error">{firstnameError && 
                    <span>{firstnameError}</span>}</p>
                </div>
                <div className="input-container">
                    <label htmlFor="lastname">Lastname:</label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        onChange={event => setLastname(event.target.value)}
                        value={lastname}
                    />
                    <p className="error">{lastnameError && 
                    <span>{lastnameError}</span>}</p>
                </div>
                <div className="input-container">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={event => setEmail(event.target.value)}
                        value={email}
                    />
                    <p className="error">{emailError && 
                    <span>{emailError}</span>}</p>
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password"
                        id="password"
                        name="Password"
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                    />
                    <p className="error">{passwordError && 
                    <span className="error">{passwordError}</span>}</p>
                </div>
                <div className="input-container">
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}
export default RegistrationForm;