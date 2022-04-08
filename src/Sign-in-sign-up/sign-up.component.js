import React from 'react';


import {CustomButtonContainer, SignUpContainer, SignUpTitle} from "./sign-up.styles";
// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

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
class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { username, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            // const { user } = await auth.createUserWithEmailAndPassword(
            //     email,
            //     password
            // );
            //
            // await createUserProfileDocument(user, { username });

            this.setState({
                              username: '',
                              email: '',
                              password: '',
                              confirmPassword: ''
                          });
        } catch (error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { username, email, password, confirmPassword } = this.state;
        return (
            <SignUpContainer>
                <SignUpTitle>Creat an account</SignUpTitle>
                {/*<span>Sign up with your email and password</span>*/}
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='firstName'
                        value={username}
                        onChange={this.handleChange}
                        // label='firstname'
                        placeholder='firstname'
                        required
                    />
                    <FormInput
                        type='text'
                        name='lastName'
                        value={username}
                        onChange={this.handleChange}
                        // label='lastName'
                        placeholder='lastName'
                        required
                    />
                    <FormInput
                        type='text'
                        name='username'
                        value={username}
                        onChange={this.handleChange}
                        // label='Username'
                        placeholder='Username'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        // label='Email'
                        placeholder='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        // label='Password'
                        placeholder = 'Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        // label='Confirm Password'
                        placeholder = 'Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </SignUpContainer>
        );
    }
}

export default SignUp;