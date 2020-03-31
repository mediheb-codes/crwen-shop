import React from 'react'
import './Signin.scss'
import FormInput from '../form-input/form-input'
import CustomButton from '../ButtonInput/ButtonInput'
import { signInWithGoogle, auth } from '../GoogleAth/SignInWithGoogel'

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : " ",
            password : " "
        }
    }
        handleSubmit = async  event =>{
            event.preventDefault();
            this.setState({email:"", password:""});

            const {email , password} = this.state;
            try{
                await auth.signInWithEmailAndPassword(email , password)
                this.setState({email : '' , password : ''})
            }catch(error){
                console.log(error)
                alert(error);
                
            }

        }
        handleChange = event => {
            const {value , name} = event.target;
            this.setState({[name] : value });
        }

        render() {
            return(
                <div className="sign-in">
                    <h1>I already have an account</h1>
                    <span>You can sign in with email and password</span>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput name="email" type="email" handleChange={this.handleChange} value={this.state.email} label="email" required/>
                        <FormInput name="password" type="password" handleChange={this.handleChange}  value={this.state.password} label="password" required/>
                        <div className="button-together">
                            <CustomButton type="submit" >Sign In</CustomButton>

                            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>sign in with Google</CustomButton>
                        </div>
                    </form>
                </div>
                

            )
        }

    }

export default SignIn;