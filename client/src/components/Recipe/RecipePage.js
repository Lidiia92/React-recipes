import React from 'react';
import {withRouter} from 'react-router-dom';

import {Query} from 'react-apollo';
import {GET_RECIPE} from '../../queries/index';

const RecipePage = (props) => {

    const {_id } = props.match.params;
    return(
        <Query query={GET_RECIPE} variables={{_id}}>
            {({data, loading, error}) => {
                if(loading) return <div>Loading</div>
                if(error) return <div>Error</div>
                console.log('get recipe by id', data);
                return <div>Recipe Page</div>
            }}
        </Query>
    );
};

export default withRouter(RecipePage);