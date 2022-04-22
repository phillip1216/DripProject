import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import SocialBtn from '../components/SocialBtn';
import '../style/AuthStyle.css'

const Auth = () => {
    return (
        <div className='Auth'>
            <h1>DRIP</h1>
            <div className='auth_wrap'>
                <AuthForm></AuthForm>
                <SocialBtn></SocialBtn>
            </div>
        </div>
    )
}
export default Auth