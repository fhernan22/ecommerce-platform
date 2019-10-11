import React from 'react';
import './sign-in-and-sign-up.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/signup/signup.component';

const SignInAndSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp /> 
    </div>
)

export default SignInAndSignUp;