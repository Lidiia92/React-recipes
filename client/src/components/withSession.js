import React from 'react';

import {Query} from 'react-apollo';
import {GET_CURRENT_USER} from '../queries/index';

const withSession = Component => props => (
    <Query query={GET_CURRENT_USER}>
    {({ data, loading, refetch }) => {
      if (loading) return null;
      console.log('withSession', data, loading, refetch);
      return (
        <Component {...props} session={data} refetch={refetch} session={data}/>
      );
     }}
    </Query>
)

export default withSession;
