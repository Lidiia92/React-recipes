import React from 'react';
import './App.css';

import { Query } from 'react-apollo';
import { GET_ALL_RECIPES } from '../queries/index';

import RecipeItem from './Recipe/RecipeItem';

const App = () => (
  <div className="App">
    <h1>Home</h1>
    <Query query={GET_ALL_RECIPES}>
      {({data, loading, error}) => {
			if(loading) return <div>Loading</div>
			if(error) return <div>Error</div>
			console.log('data', data, loading, error);
			return <ul>{data.getAllRecipes.map(recipe => 
        <RecipeItem key={recipe._id} name={recipe.name} category={recipe.category} _id={recipe._id}/>
        )}</ul>
      }}
    </Query>
  </div>
);

export default App;
