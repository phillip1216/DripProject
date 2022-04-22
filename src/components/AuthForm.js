import React, { useState } from 'react';
import { authService } from '../firebase';

const AuthForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [newAcount, setNewAcount] = useState(true)

    const onChange = (e) => {
        const { target: { name, value } } = e
        if (name === "email") {
            setEmail(value)
        } else if (name === "password") {
            setPassword(value)
        }
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        if (newAcount) {
            await authService.createUserWithEmailAndPassword(
                email, password
            )
        } else {
            await authService.signInWithEmailAndPassword(
                email, password
            )
        }
    }

    const toggleAccount = () => setNewAcount((prev) => !prev)
    return (
        <div className='AuthForm'>
            <form className='AuthForm_form' onSubmit={onSubmit}>
                <input type="email" onChange={onChange} placeholder='Email' value={email} required name='email'></input>
                <input type="password" onChange={onChange} placeholder='Password' value={password} required name='password'></input>
                <input type='submit' value='Log in'></input>
            </form>
            {/* <span onClick={toggleAccount}>{newAcount ? "Sign In" : "Create Account"}</span> */}
        </div>
    )
}
export default AuthForm