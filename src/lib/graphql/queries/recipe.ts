import gql from 'graphql-tag';

export const getRecipe = gql`
    query($id: Float!) {
        recipe(id: $id) {
            id
            title
        }
    }
`;