import React from 'react';


import {CustomButtonContainer, SignUpContainer, SignUpTitle} from "./sign-up.styles";
import FilledButton from "../Components/FilledButton";
import Spacer from "../Components/Spacer";
// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const FormInput=({handleChange, label, ...otherProps}) => (

    <div className="form-group f-form-group f-bg d-flex align-items-center"
         style={{"padding": "0px 0px 0px 10px", "borderRadius": "3px", "width": "100%"}}>
        <input className="form-input shadow-none"
               onChange={handleChange} {...otherProps}/>
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
    constructor(props) {
        super(props);

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
                <form className="f-form d-flex align-items-center justify-content-center " onSubmit={this.handleSubmit}>
                    <div className="f-form-content-sign d-flex flex-column align-items-center justify-content-center">
                        <div className="f-names d-flex flex-wrap g-2 align-items-center">
                            <FormInput
                            type='text'
                            name='firstName'
                            value={username}
                            onChange={this.handleChange}
                            // label='firstname'
                            placeholder='First Name'
                            required
                        />
                            <FormInput
                                type='text'
                                name='lastName'
                                value={username}
                                onChange={this.handleChange}
                                // label='lastName'
                                placeholder='Last Name'
                                required
                            />
                        </div>
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
                        <Spacer size={24}/>

                        <FilledButton name={"Sign Up"} handleSubmit={this.handleSubmit}/>
                    </div>
                </form>
        );
    }
}

export default SignUp;