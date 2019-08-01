import gql from 'graphql-tag';

export const getArticles = gql`
    {
        getArticles {
            title
            id
            description
        }
    }
`;
