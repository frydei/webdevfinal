import React from 'react';

// import './sign-in.styles';
import { CustomButtonContainer } from './sign-in.styles';


// import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const FormInput=({handleChange, label, ...otherProps}) => (
    <div className="group">
        <input className='form-input' onChange={handleChange} {...otherProps}/>
        {
            label ?
            (<label className = {`${otherProps.value.length? 'shrink':''} form-input-label`}>
                {label}

            </label>)
                  :null
        }

    </div>
);

const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            email: '',
            password: ''
        };
    }

    handleSubmit= async event =>{
        event.preventDefault();
        const {email, password} =this.state;

        try {
            // await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'',password:''});
        } catch (error){
            console.log(error);
        }

    };

    handleChange = event =>{
        const{value,name} = event.target;
        this.setState({[name]:value})

    };

    render() {
        return (
            <div className='sign-in'>
                <h2>Log in</h2>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        // label ='email'
                        placeHolder = 'Email address'
                        handleChange={this.handleChange}
                        required/>

                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        // label='password'
                        placeHolder = 'Password'
                        handleChange={this.handleChange}
                        required/>

                    <div className = 'buttons'>
                        <CustomButton type="submit" > Log in</CustomButton>
                        {/*<CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn> {' '}Sign in with Google {' '}</CustomButton>*/}

                    </div>

                </form>
            </div>
        );
    }
}

export default SignIn;