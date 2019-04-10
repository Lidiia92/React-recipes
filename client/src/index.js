import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './index.css';

import App from './components/App';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Navbar from './components/Navbar';
import Search from './components/Recipe/Search';
import AddRecipe from './components/Recipe/AddRecipe';
import RecipePage from './components/Recipe/RecipePage';
import Profile from './components/Profile/Profile';
import withSession from './components/withSession';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';


const client = new ApolloClient({
    uri: 'http://localhost:4444/graphql',
    fetchOptions: {
        credentials: 'include'
    },
    request: operation => {
        const token = localStorage.getItem('token');
        operation.setContext({
            headers: {
                authorization: token
            }
        })
    },
    onError: ({networkError}) => {
        if(networkError) {
            console.log('Network Error', networkError);
        }
    }
});

const Root = ({refetch, session}) => (
    <Router>
        <Navbar session={session}/>
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/login" render={() => <Login refetch={refetch}/>} />
            <Route path="/signup" render={() => <Signup refetch={refetch}/>} />
            <Route path="/search" render={() => <Search refetch={refetch}/>} />
            <Route path="/recipe/add" render={() => <AddRecipe />} />
            <Route path="/profile" render={() => <Profile />} />
            <Route path="/recipe/:_id" render={() => <RecipePage />} />
            <Redirect to="/" />
        </Switch>
    </Router>
);

const RootWithSession = withSession(Root);

ReactDOM.render(
    <ApolloProvider client={client}>
            <RootWithSession />
    </ApolloProvider>,

    document.getElementById('root'));

