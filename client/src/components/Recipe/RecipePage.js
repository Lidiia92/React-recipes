import React from 'react';
import {withRouter} from 'react-router-dom';

const RecipePage = (props) => {

    const {_id } = props.match.params;
    return(
        <div>Recipe Page</div>
    );
};

export default withRouter(RecipePage);