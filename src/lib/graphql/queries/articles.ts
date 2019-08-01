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

export const createArticle = gql`
    mutation($title: String!, $description: String) {
        createArticle(data: { title: $title, description: $description }) {
            createdAt
            description
            title
            id
        }
    }
`;
