import React from 'react';
import {Mutation} from 'react-apollo';
import {SIGNUP_USER} from '../../queries/index';

import Error from '../Error';

const initialState = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: ""
}

class Signup extends React.Component {
    state = {
        ...initialState
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    handleSubmit = async (e, signupUser) => {
        e.preventDefault();
        const data = await signupUser();
        this.clearState();
    }

    clearState = () => {
        this.setState({
            ...initialState
        })
    }

    validateForm = () => {
        const {username, email, password, passwordConfirmation} = this.state;
        if (!username || !email || !password || !passwordConfirmation || password !== passwordConfirmation) return true;
    }


    render() {
        const {username, email, password, passwordConfirmation} = this.state;

        return (
            <div className="App">
                <h2 className="App">Signup</h2>
                <Mutation mutation={SIGNUP_USER} variables={{username, email, password}}>
                    {(signupUser, {data, loading, error}) => {

                        return (
                            <form className="form" onSubmit={(event) => this.handleSubmit(event, signupUser)}>
                                <input type="text" name="username" placeholder="Username" value={username} onChange={this.handleChange}/>
                                <input type="email" name="email" placeholder="Email Address" value={email} onChange={this.handleChange}/>
                                <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange}/>
                                <input type="password" name="passwordConfirmation" placeholder="Confirm Password" value={passwordConfirmation} onChange={this.handleChange}/>
                                <button type="submit" className="button-primary" disabled={loading || this.validateForm()}>Submit</button>

                                {error && <Error error={error}/>}
                            </form>
                        );
                    }}
                </Mutation>
            </div>
        );
    }
}

export default Signup; 