import React from 'react'
import{auth , createUserProfil} from '../GoogleAth/SignInWithGoogel'
import FormInput from '../form-input/form-input'
import CustomButton from '../ButtonInput/ButtonInput'
import './sign-up.scss'


class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName : '' ,
            email: '',
            password : '' , 
            confirmPassword : ''
        };
    }
    handleSubmit = async event =>{
        event.preventDefault();
        const {displayName , email , password , confirmPassword} = this.state;
        if (password !== confirmPassword) {
            alert('you password is not equivilent to confirm password')
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email , password);
            createUserProfil(user , {displayName});
            
            
            this.setState = ({
                displayName : '' ,
                email: '',
                password : '' , 
                confirmPassword : ''
            });

        }catch (error){
            console.error(error);
        }
    }
    handleChange = event =>{
        const {name , value} = event.target;
        this.setState({[name]: value});
    } 

    
    render(){
        const {displayName , email , password , confirmPassword} = this.state
        return(
            <div className="sign-up">
                <h1 className="title">I not have an account</h1>
                <span>Sign Up with email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput 
                    type="text" name="displayName" value={displayName} onChange={this.handleChange} label="Dislay Name" required/>
                    <FormInput 
                    type="email" name="email" value={email} onChange={this.handleChange} label="Email" required/>
                    <FormInput 
                    type="password" name="password" value={password} onChange={this.handleChange} label="Password" required/>
                    <FormInput 
                    type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label="Confirm Password" required/>
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
} 
export default SignUp;