import React from 'react'
import './SigninSignout.scss'
import SignIn from '../SignIn/Signin.component'
import SignUp from '../sign-up/sign-up'



const SigninSignout = () =>(
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>


);
export default SigninSignout;