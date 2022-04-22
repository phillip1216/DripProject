import React from 'react';
import { authService, firebaseInstance } from '../firebase';

const onSocialClick = async (event) => {
    const { target: { name } } = event;
    let provider;
    if (name === "google") {
        provider = new firebaseInstance.auth.GoogleAuthProvider();
    }
    await authService.signInWithPopup(provider)
}

const SocialBtn = () => {
    return (
        <div className='SocialBtn'>
            <button onClick={onSocialClick} name='google'>Continue with Google</button>
        </div>
    )
}
export default SocialBtn;