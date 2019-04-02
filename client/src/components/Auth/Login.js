import React from 'react';
import {Mutation} from 'react-apollo';
import {SIGNIN_USER} from '../../queries/index';

import Error from '../Error';

const initialState = {
    username: "",
    password: ""
}

class Login extends React.Component {
    state = {
        ...initialState
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    handleSubmit = async (e, signinUser) => {
        e.preventDefault();
        const data = await signinUser();
        console.log('data Login.js', data);
        localStorage.setItem('token', data.data.signinUser.token);
        this.clearState();
    }

    clearState = () => {
        this.setState({
            ...initialState
        })
    }

    validateForm = () => {
        const {username, password } = this.state;
        if (!username || !password ) return true;
    }


    render() {
        const {username, password} = this.state;

        return (
            <div className="App">
                <h2 className="App">Signin</h2>
                <Mutation mutation={SIGNIN_USER} variables={{username, password}}>
                    {(signinUser, {data, loading, error}) => {

                        return (
                            <form className="form" onSubmit={(event) => this.handleSubmit(event, signinUser)}>
                                <input type="text" name="username" placeholder="Username" value={username} onChange={this.handleChange}/>
                                <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange}/>
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

export default Login; 