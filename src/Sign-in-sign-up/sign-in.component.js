import React from 'react';

// import './sign-in.styles';
import {CustomButtonContainer, SignUpContainer} from './sign-up.styles';
import FilledButton from "../Components/FilledButton";
import Spacer from "../Components/Spacer";


// import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className="form-group f-form-group f-bg d-flex align-items-center"
         style={{"padding": "0px 0px 0px 10px", "borderRadius": "3px", "width": "100%"}}>
        <input className="form-input" onChange={handleChange} {...otherProps}/>
        {
            label ?
                (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}

                </label>)
                : null
        }

    </div>
);

const CustomButton = ({children, ...props}) => (
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;

        try {
            // await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (error) {
            console.log(error);
        }

    };

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});

    };

    render() {
        return (
           <form onSubmit={this.handleSubmit} className="f-form d-flex align-items-center justify-content-center" style={{"width": "100%"}}>
                    <div className="f-form-content-sign d-flex flex-column align-items-center justify-content-center">
                        <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        // label ='email'
                        placeholder="Email address"
                        handleChange={this.handleChange}
                        required/>

                        <FormInput
                            name="password"
                            type="password"
                            value={this.state.password}
                            // label='password'
                            placeholder="Password"
                            handleChange={this.handleChange}
                            required/>
                        <Spacer size={24}/>
                        <FilledButton name={"Log in"} handleSubmit={this.handleSubmit}/>
                    </div>



                </form>
                );
    }
}

export default SignIn;