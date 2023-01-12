import React from 'react';

export const SignInPage = () => {

    const signIn = () => {
        localStorage.setItem('uid', 'user id')
    }

    return (
        <div>
            Sign in
            <button onClick={signIn}>sign in</button>
        </div>
    )
}