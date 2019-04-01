import { gql } from 'apollo-boost';

/* Recipes queires */
export const GET_ALL_RECIPES = gql`
    query {
        getAllRecipes {
            name
            category
            description
            instructions
            createdDate
            likes
        }
    }
`;

/*Recipes mutations */


/*User queries */


/*User mutations */
export const SIGNUP_USER = gql`

    mutation($username: String!, $email: String!, $password: String!) {
        signupUser(username: $username, email: $email, password: $password) {
        token
        }
    }

`;